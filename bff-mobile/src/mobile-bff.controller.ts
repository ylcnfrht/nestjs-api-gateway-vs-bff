import { Controller, Get } from '@nestjs/common';
import axios from 'axios';

@Controller('mobile')
export class MobileBFFController {
  private readonly userServiceUrl = 'http://localhost:3001';
  private readonly productServiceUrl = 'http://localhost:3002';

  @Get('users')
  async getMobileUsers() {
    const { data } = await axios.get(`${this.userServiceUrl}/users`);
    return {
      data: data.map((user) => ({ id: user.id, name: user.name })),
    };
  }

  @Get('products')
  async getMobileProducts() {
    const { data } = await axios.get(`${this.productServiceUrl}/products`);
    return {
      data: data.map((product) => ({ id: product.id, name: product.name })),
    };
  }
}
