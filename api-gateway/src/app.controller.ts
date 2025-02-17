import { Controller, Get } from '@nestjs/common';
import axios from 'axios';

@Controller()
export class AppController {
  private readonly userServiceUrl = 'http://localhost:3001';
  private readonly productServiceUrl = 'http://localhost:3002';

  @Get('users')
  async getUsers() {
    const { data } = await axios.get(`${this.userServiceUrl}/users`);
    return data;
  }

  @Get('products')
  async getProducts() {
    const { data } = await axios.get(`${this.productServiceUrl}/products`);
    return data;
  }
}
