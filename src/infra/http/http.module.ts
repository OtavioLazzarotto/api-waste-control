import { Module } from '@nestjs/common';
import { AuthenticateController } from './controllers/authenticate-controller';
import { CreateAccountController } from './controllers/create-account.controller';
import { FetchRecentUserController } from './controllers/fetch-recent-user.controller';
import { DatabaseModule } from '../database/database.module';
import { CreateCategoryUseCase } from '@/domain/application/use-cases/create-category';
import { CreateCategoryController } from './controllers/create-category.controller';

@Module({
  imports: [DatabaseModule],
  controllers: [
    CreateAccountController,
    AuthenticateController,
    FetchRecentUserController,
    CreateCategoryController,
  ],
  providers: [CreateCategoryUseCase],
})
export class HttpModule {}
