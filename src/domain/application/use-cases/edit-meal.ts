import { TurnsType } from '@/domain/enterprise/entities/meal';
import { MealsRepository } from '../repositories/meals-repository';

export interface EditMealUseCaseRequest {
  mealId: string;
  date: Date;
  turn: TurnsType;
}

export interface EditMealUseCaseResponse {}

export class EditMealUseCase {
  constructor(private mealsRepository: MealsRepository) {}

  async execute({
    mealId,
    date,
    turn,
  }: EditMealUseCaseRequest): Promise<EditMealUseCaseResponse> {
    const meal = await this.mealsRepository.findById(mealId);

    if (!meal) {
      throw new Error('Meal not found');
    }

    meal.date = date;
    meal.turn = turn;

    await this.mealsRepository.save(meal);

    return {};
  }
}
