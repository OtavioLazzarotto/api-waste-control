import { Module } from '@nestjs/common';
import { AuthenticateController } from './controllers/authenticate-controller';
import { CreateAccountController } from './controllers/create-account.controller';
import { FetchRecentCategoriesController } from './controllers/fetch-recent-categories.controller';
import { DatabaseModule } from '../database/database.module';
import { CreateCategoryUseCase } from '@/domain/application/use-cases/create-category';
import { CreateCategoryController } from './controllers/create-category.controller';
import { CreateFoodController } from './controllers/create-food.controller';
import { CreateFoodUseCase } from '@/domain/application/use-cases/create-food';
import { FetchRecentCategoriesUseCase } from '@/domain/application/use-cases/fetch-recent-categories';
import { FetchRecentFoodsController } from './controllers/fetch-recent-foods.controller';
import { FetchRecentFoodsUseCase } from '@/domain/application/use-cases/fetch-recent-foods';
import { AuthenticateUserUseCase } from '@/domain/application/use-cases/authenticate-user';
import { CryptographyModule } from '../cryptography/cryptography.module';
import { CreateUserUseCase } from '@/domain/application/use-cases/create-user';
import { CreateMealUseCase } from '@/domain/application/use-cases/create-meal';
import { CreateMealController } from './controllers/create-meal-controller';
import { CreateMealItemController } from './controllers/create-meal-item.controller';
import { CreateWasteController } from './controllers/create-waste.controller';
import { CreateMealItemUseCase } from '@/domain/application/use-cases/create-meal-item';
import { CreateWasteUseCase } from '@/domain/application/use-cases/create-waste';
import { FetchRecentMealsController } from './controllers/fetch-recent-meals.controller';
import { FetchRecentMealsUseCase } from '@/domain/application/use-cases/fetch-recent-meals';

@Module({
  imports: [DatabaseModule, CryptographyModule],
  controllers: [
    CreateAccountController,
    AuthenticateController,
    FetchRecentCategoriesController,
    CreateCategoryController,
    CreateFoodController,
    FetchRecentFoodsController,
    CreateMealController,
    CreateMealItemController,
    CreateWasteController,
    FetchRecentMealsController
  ],
  providers: [
    CreateCategoryUseCase,
    CreateFoodUseCase,
    FetchRecentCategoriesUseCase,
    FetchRecentFoodsUseCase,
    AuthenticateUserUseCase,
    CreateUserUseCase,
    CreateMealUseCase,
    CreateMealItemUseCase,
    CreateWasteUseCase,
    FetchRecentMealsUseCase
  ],
})
export class HttpModule {}
