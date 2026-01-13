import { MealItem } from "@/domain/enterprise/entities/meal-item";
import { PaginationParams } from "@/domain/enterprise/repositories/pagination-params";

export abstract class MealItensRepository {
  abstract findById(id: string): Promise<MealItem | null>;
  abstract findManyRecent(params: PaginationParams): Promise<MealItem[]>;
  abstract create(meal: MealItem): Promise<void>;
  abstract save(meal: MealItem): Promise<void>;
  abstract delete(meal: MealItem): Promise<void>;
}
