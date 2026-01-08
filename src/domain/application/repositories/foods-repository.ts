import { Food } from '@/domain/enterprise/entities/food';
import { PaginationParams } from '@/domain/enterprise/repositories/pagination-params';

export interface FoodsRepository {
  findById(name: string): Promise<Food | null>;
  findManyRecent(params: PaginationParams): Promise<Food[]>;
  create(food: Food): Promise<void>;
  save(food: Food): Promise<void>;
  delete(food: Food): Promise<void>;
}
