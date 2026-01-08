import { Meal } from '@/domain/enterprise/entities/meal';
import { PaginationParams } from '@/domain/enterprise/repositories/pagination-params';

export interface MealsRepository {
  findById(id: string): Promise<Meal | null>;
  findManyRecent(params: PaginationParams): Promise<Meal[]>;
  create(meal: Meal): Promise<void>;
  save(meal: Meal): Promise<void>;
  delete(meal: Meal): Promise<void>;
}
