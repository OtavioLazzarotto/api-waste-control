import { CategoriesRepository } from '@/domain/application/repositories/categories-repository';
import { Category } from '@/domain/enterprise/entities/category';
import { PaginationParams } from '@/domain/enterprise/repositories/pagination-params';

export class PrismaCategoriesRepository implements CategoriesRepository {
  findById(id: string): Promise<Category | null> {
    throw new Error('Method not implemented.');
  }
  findManyRecent(params: PaginationParams): Promise<Category[]> {
    throw new Error('Method not implemented.');
  }
  create(category: Category): Promise<void> {
    throw new Error('Method not implemented.');
  }
  save(category: Category): Promise<void> {
    throw new Error('Method not implemented.');
  }
  delete(category: Category): Promise<void> {
    throw new Error('Method not implemented.');
  }
}
