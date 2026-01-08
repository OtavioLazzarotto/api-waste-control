import { MealItem } from "@/domain/enterprise/entities/meal-item";
import { PaginationParams } from "@/domain/enterprise/repositories/pagination-params";

export interface MealItensRepository {
  findById(id: string): Promise<MealItem | null>;
  findManyRecent(params: PaginationParams): Promise<MealItem[]>;
  create(meal: MealItem): Promise<void>;
  save(meal: MealItem): Promise<void>;
  delete(meal: MealItem): Promise<void>;
}
