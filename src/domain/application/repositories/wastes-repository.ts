import { Waste } from '@/domain/enterprise/entities/waste';
import { PaginationParams } from '@/domain/enterprise/repositories/pagination-params';

export interface WastesRepository {
  findById(id: string): Promise<Waste | null>;
  findManyRecent(params: PaginationParams): Promise<Waste[]>;
  create(meal: Waste): Promise<void>;
  save(meal: Waste): Promise<void>;
  delete(meal: Waste): Promise<void>;
}
