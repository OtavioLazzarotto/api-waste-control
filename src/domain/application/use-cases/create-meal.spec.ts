import { TurnsType } from '@/domain/enterprise/entities/meal';
import { InMemoryMealsRepository } from '../../../../test/repositories/in-memory-meals-repository';
import { CreateMealUseCase } from './create-meal';

let inMemoryMealsRepository: InMemoryMealsRepository;
let sut: CreateMealUseCase;

describe('Create Meal', () => {
  beforeEach(() => {
    inMemoryMealsRepository = new InMemoryMealsRepository();
    sut = new CreateMealUseCase(inMemoryMealsRepository);
  });

  it('should be able to create an meal', async () => {
    const { meal } = await sut.execute({
      date: new Date(),
      turn: TurnsType.DINNER,
    });

    expect(meal.id).toBeTruthy();
    expect(inMemoryMealsRepository.items[0].id).toEqual(meal.id);
  });
});
