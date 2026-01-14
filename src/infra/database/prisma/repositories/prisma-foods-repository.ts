import { FoodsRepository } from '@/domain/application/repositories/foods-repository';
import { Food } from '@/domain/enterprise/entities/food';
import { PaginationParams } from '@/domain/enterprise/repositories/pagination-params';

export class PrismaFoodsRepository implements FoodsRepository {
  findById(name: string): Promise<Food | null> {
    throw new Error('Method not implemented.');
  }
  findManyRecent(params: PaginationParams): Promise<Food[]> {
    throw new Error('Method not implemented.');
  }
  create(food: Food): Promise<void> {
    throw new Error('Method not implemented.');
  }
  save(food: Food): Promise<void> {
    throw new Error('Method not implemented.');
  }
  delete(food: Food): Promise<void> {
    throw new Error('Method not implemented.');
  }
}
