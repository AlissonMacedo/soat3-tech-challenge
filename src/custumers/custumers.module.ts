import { Module } from '@nestjs/common';
import { CustomersService } from './custumers.service';
import { CustomersController } from './customers.controller';

@Module({
  controllers: [CustomersController],
  providers: [CustomersService],
})
export class CustomersModule {}
