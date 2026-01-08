import { UniqueEntityID } from '@/core/entities/unique-entity-id';
import { InMemoryMealItensRepository } from '../../../../test/repositories/in-memory-meal-itens-repository';
import { GetMealItemByIdUseCase } from './get-by-id-meal-item';
import { makeMealItem } from '../../../../test/factories/make-meal-item';


let inMemoryMealItensRepository: InMemoryMealItensRepository;
let sut: GetMealItemByIdUseCase;

describe('Get By Id Meal Item', () => {
  beforeEach(() => {
    inMemoryMealItensRepository = new InMemoryMealItensRepository();
    sut = new GetMealItemByIdUseCase(inMemoryMealItensRepository);
  });

  it('should be able to get a meal item by id', async () => {
    const newMealItem = makeMealItem({}, new UniqueEntityID('mealItem-1'));

    await inMemoryMealItensRepository.create(newMealItem);

    const { mealItem } = await sut.execute({
      mealItemId: 'mealItem-1',
    });

    expect(mealItem.id).toBeTruthy();
    expect(mealItem.id).toEqual(newMealItem.id);
  });
});
