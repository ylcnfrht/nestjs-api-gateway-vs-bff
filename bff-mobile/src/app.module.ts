import { Module } from '@nestjs/common';
import { MobileBFFController } from './mobile-bff.controller';

@Module({
  imports: [],
  controllers: [MobileBFFController],
})
export class AppModule {}
