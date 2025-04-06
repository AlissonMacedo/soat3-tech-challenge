import { Module } from '@nestjs/common';

import { CustomersController } from './customers.controller';
import { CustomersService } from 'src/@core/application/services/customers.service';

@Module({
  controllers: [],
  providers: [CustomersService],
})
export class CustomersModule {}
