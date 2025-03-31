import { Module } from '@nestjs/common';
import { CategoriesService } from 'src/@core/application/services/categories.service';
import { DatabaseModule } from 'src/adapter/driven/infra/database/database.module';
import { CategoriesController } from 'src/categories/categories.controller';

@Module({
  controllers: [CategoriesController],
  imports: [DatabaseModule],
  providers: [CategoriesService],
})
export class CategoriesModule {}
