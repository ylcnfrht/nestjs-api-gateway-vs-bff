import { Controller, Get } from '@nestjs/common';
import axios from 'axios';

@Controller('web')
export class WebBFFController {
  private readonly apiGatewayUrl = 'http://localhost:3000';

  @Get('users')
  async getWebUsers() {
    const { data } = await axios.get(`${this.apiGatewayUrl}/users`);
    return { data };
  }

  @Get('products')
  async getWebProducts() {
    const { data } = await axios.get(`${this.apiGatewayUrl}/products`);
    return { data };
  }
}
