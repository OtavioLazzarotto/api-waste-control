import { Waste } from '@/domain/enterprise/entities/waste';
import { PaginationParams } from '@/domain/enterprise/repositories/pagination-params';

export abstract class WastesRepository {
  abstract findById(id: string): Promise<Waste | null>;
  abstract findManyRecent(params: PaginationParams): Promise<Waste[]>;
  abstract create(waste: Waste): Promise<void>;
  abstract save(waste: Waste): Promise<void>;
  abstract delete(waste: Waste): Promise<void>;
}
