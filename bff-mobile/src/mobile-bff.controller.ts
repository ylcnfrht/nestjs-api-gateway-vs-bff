import { Controller, Get } from '@nestjs/common';
import axios from 'axios';

@Controller('mobile')
export class MobileBFFController {
  private readonly apiGatewayUrl = 'http://localhost:3000';

  @Get('users')
  async getMobileUsers() {
    const { data } = await axios.get(`${this.apiGatewayUrl}/users`);
    return {
      data: data.map((user) => ({ id: user.id, name: user.name })),
    };
  }

  @Get('products')
  async getMobileProducts() {
    const { data } = await axios.get(`${this.apiGatewayUrl}/products`);
    return {
      data: data.map((product) => ({ id: product.id, name: product.name })),
    };
  }
}
