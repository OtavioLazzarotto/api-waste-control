import { Module } from '@nestjs/common';
import { PrismaService } from './prisma/prisma.service';
import { PrismaCategoriesRepository } from './prisma/repositories/prisma-categories-repository';
import { PrismaFoodsRepository } from './prisma/repositories/prisma-foods-repository';
import { PrismaMealItensRepository } from './prisma/repositories/prisma-meal-itens-repository';
import { PrismaMealsRepository } from './prisma/repositories/prisma-meals-repository';
import { PrismaUsersRepository } from './prisma/repositories/prisma-users-repository';
import { PrismaWastesRepository } from './prisma/repositories/prisma-wastes-repository';
import { CategoriesRepository } from '@/domain/application/repositories/categories-repository';

@Module({
  providers: [
    PrismaService,
    {
      provide: CategoriesRepository,
      useClass: PrismaCategoriesRepository,
    },
    PrismaFoodsRepository,
    PrismaMealItensRepository,
    PrismaMealsRepository,
    PrismaUsersRepository,
    PrismaWastesRepository,
  ],
  exports: [
    PrismaService,
    CategoriesRepository,
    PrismaFoodsRepository,
    PrismaMealItensRepository,
    PrismaMealsRepository,
    PrismaUsersRepository,
    PrismaWastesRepository,
  ],
})
export class DatabaseModule {}
