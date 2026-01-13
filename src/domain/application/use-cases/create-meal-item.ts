import { UniqueEntityID } from '@/core/entities/unique-entity-id';
import { MealItensRepository } from '../repositories/meal-item-repository';
import { MealItem } from '@/domain/enterprise/entities/meal-item';
import { Either, right } from '@/core/either';
import { Injectable } from '@nestjs/common';

interface CreateMealItemUseCaseRequest {
  mealId: string;
  foodId: string;
  quantityServed: number;
  quantityConsumeds: number;
}

type CreateMealItemUseCaseResponse = Either<
  null,
  {
    mealItem: MealItem;
  }
>;

@Injectable()
export class CreateMealItemUseCase {
  constructor(private mealItensRepository: MealItensRepository) {}

  async execute({
    mealId,
    foodId,
    quantityServed,
    quantityConsumeds,
  }: CreateMealItemUseCaseRequest): Promise<CreateMealItemUseCaseResponse> {
    const mealItem = MealItem.create({
      mealId: new UniqueEntityID(mealId),
      foodId: new UniqueEntityID(foodId),
      quantityConsumeds,
      quantityServed,
    });

    await this.mealItensRepository.create(mealItem);

    return right({
      mealItem,
    });
  }
}
