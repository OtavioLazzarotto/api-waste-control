import { Meal, TurnsType } from '@/domain/enterprise/entities/meal';
import { MealsRepository } from '../repositories/meals-repository';
import { UniqueEntityID } from '@/core/entities/unique-entity-id';

interface CreateMealUseCaseRequest {
  date: Date;
  turn: TurnsType;
}

interface CreateMealUseCaseResponse {
  meal: Meal;
}

export class CreateMealUseCase {
  constructor(private mealsRepository: MealsRepository) {}

  async execute({
    date,
    turn,
  }: CreateMealUseCaseRequest): Promise<CreateMealUseCaseResponse> {
    const meal = Meal.create({
        date,
        turn,
        userId: new UniqueEntityID
    })
    
    await this.mealsRepository.create(meal)

    return {
        meal
    }
  }
}
