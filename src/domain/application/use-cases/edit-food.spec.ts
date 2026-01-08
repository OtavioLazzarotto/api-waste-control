import { UniqueEntityID } from '@/core/entities/unique-entity-id';
import { makeFood } from '../../../../test/factories/make-food';
import { InMemoryFoodsRepository } from '../../../../test/repositories/in-memory-foods-repository';
import { EditFoodUseCase } from './edit-food';

let inMemoryFoodsRepository: InMemoryFoodsRepository;
let sut: EditFoodUseCase;

describe('Edit Food', () => {
  beforeEach(() => {
    inMemoryFoodsRepository = new InMemoryFoodsRepository();
    sut = new EditFoodUseCase(inMemoryFoodsRepository);
  });

  it('should be able to edit a food', async () => {
    const newFood = makeFood({ name: 'food1' }, new UniqueEntityID('food-1'));

    await inMemoryFoodsRepository.create(newFood);

    await sut.execute({
      foodId: newFood.id.toValue(),
      name: 'food-name-2',
      categoryId: 'category-2',
    });

    expect(inMemoryFoodsRepository.items[0]).toMatchObject({
      name: 'food-name-2',
      categoryId: new UniqueEntityID('category-2'),
    });
  });
});
