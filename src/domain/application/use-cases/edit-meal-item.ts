import { MealItensRepository } from '../repositories/meal-item-repository';
import { UniqueEntityID } from '../../../core/entities/unique-entity-id';

export interface EditMealItemUseCaseRequest {
  mealItemId: string;
  mealId: string;
  foodId: string;
  quantityServed: number;
  quantityConsumeds: number;
}

export interface EditMealItemUseCaseResponse {}

export class EditMealItemUseCase {
  constructor(private mealItensRepository: MealItensRepository) {}

  async execute({
    mealItemId,
    mealId,
    foodId,
    quantityServed,
    quantityConsumeds,
  }: EditMealItemUseCaseRequest): Promise<EditMealItemUseCaseResponse> {
    const mealItem = await this.mealItensRepository.findById(mealItemId);

    if (!mealItem) {
      throw new Error('Meal item not found');
    }

    mealItem.mealId = new UniqueEntityID(mealId);
    mealItem.foodId = new UniqueEntityID(foodId);
    mealItem.quantityConsumeds = quantityConsumeds
    mealItem.quantityServed = quantityServed

    await this.mealItensRepository.save(mealItem);

    return {};
  }
}
