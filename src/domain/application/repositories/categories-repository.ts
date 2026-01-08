import { Category } from '@/domain/enterprise/entities/category';
import { PaginationParams } from '@/domain/enterprise/repositories/pagination-params';

export interface CategoriesRepository {
  findById(id: string): Promise<Category | null>
  findManyRecent(params: PaginationParams): Promise<Category[]>;
  create(category: Category): Promise<void>;
  save(category: Category): Promise<void>;
  delete(category: Category): Promise<void>;
}
