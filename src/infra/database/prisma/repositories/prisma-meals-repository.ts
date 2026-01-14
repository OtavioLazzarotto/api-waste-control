import { MealsRepository } from '@/domain/application/repositories/meals-repository';
import { Meal } from '@/domain/enterprise/entities/meal';
import { PaginationParams } from '@/domain/enterprise/repositories/pagination-params';

export class PrismaMealsRepository implements MealsRepository {
  findById(id: string): Promise<Meal | null> {
    throw new Error('Method not implemented.');
  }
  findManyRecent(params: PaginationParams): Promise<Meal[]> {
    throw new Error('Method not implemented.');
  }
  create(meal: Meal): Promise<void> {
    throw new Error('Method not implemented.');
  }
  save(meal: Meal): Promise<void> {
    throw new Error('Method not implemented.');
  }
  delete(meal: Meal): Promise<void> {
    throw new Error('Method not implemented.');
  }
}
