import { MealItensRepository } from '@/domain/application/repositories/meal-item-repository';
import { MealItem } from '@/domain/enterprise/entities/meal-item';
import { PaginationParams } from '@/domain/enterprise/repositories/pagination-params';

export class PrismaMealItensRepository implements MealItensRepository {
  findById(id: string): Promise<MealItem | null> {
    throw new Error('Method not implemented.');
  }
  findManyRecent(params: PaginationParams): Promise<MealItem[]> {
    throw new Error('Method not implemented.');
  }
  create(meal: MealItem): Promise<void> {
    throw new Error('Method not implemented.');
  }
  save(meal: MealItem): Promise<void> {
    throw new Error('Method not implemented.');
  }
  delete(meal: MealItem): Promise<void> {
    throw new Error('Method not implemented.');
  }
}
