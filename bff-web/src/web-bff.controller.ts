import { Controller, Get } from '@nestjs/common';
import axios from 'axios';

@Controller('web')
export class WebBFFController {
  private readonly userServiceUrl = 'http://localhost:3001';
  private readonly productServiceUrl = 'http://localhost:3002';
  @Get('users')
  async getWebUsers() {
    const { data } = await axios.get(`${this.userServiceUrl}/users`);
    return { data };
  }

  @Get('products')
  async getWebProducts() {
    const { data } = await axios.get(`${this.productServiceUrl}/products`);
    return { data };
  }
}
