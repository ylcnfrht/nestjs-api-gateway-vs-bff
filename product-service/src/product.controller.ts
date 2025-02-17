import { Controller, Get } from '@nestjs/common';

@Controller('products')
export class ProductController {
  @Get()
  getProducts() {
    return [
      { id: 101, name: 'Laptop', price: 1000 },
      { id: 102, name: 'Phone', price: 500 },
    ];
  }
}
