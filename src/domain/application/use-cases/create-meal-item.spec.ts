import { makeMealItem } from '../../../../test/factories/make-meal-item';
import { InMemoryMealItensRepository } from '../../../../test/repositories/in-memory-meal-itens-repository';
import { CreateMealItemUseCase } from './create-meal-item';

let inMemoryMealItensRepository: InMemoryMealItensRepository;
let sut: CreateMealItemUseCase;

describe('Create Meal Item', () => {
  beforeEach(() => {
    inMemoryMealItensRepository = new InMemoryMealItensRepository();
    sut = new CreateMealItemUseCase(inMemoryMealItensRepository);
  });

  it('should be able to create an meal item', async () => {
    const newMealItem = makeMealItem();

    const { mealItem } = await sut.execute({
      mealId: 'meal-1',
      foodId: 'food-1',
      quantityConsumeds: newMealItem.quantityConsumeds,
      quantityServed: newMealItem.quantityServed
    });

    expect(mealItem.id).toBeTruthy();
    expect(inMemoryMealItensRepository.items[0].id).toEqual(mealItem.id);
  });
});
