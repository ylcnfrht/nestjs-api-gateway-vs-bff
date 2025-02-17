import { Module } from '@nestjs/common';
import { WebBFFController } from './web-bff.controller';

@Module({
  imports: [],
  controllers: [WebBFFController],
})
export class AppModule {}
