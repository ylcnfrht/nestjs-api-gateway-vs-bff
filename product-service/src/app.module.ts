import { Module } from '@nestjs/common';
import { ProductController } from './product.controller';

@Module({
  imports: [],
  controllers: [ProductController],
})
export class AppModule {}
