import { InMemoryFoodsRepository } from '../../../../test/repositories/in-memory-foods-repository';
import { CreateFoodUseCase } from './create-food';

let inMemoryFoodsRepository: InMemoryFoodsRepository;
let sut: CreateFoodUseCase;

describe('Create Food', () => {
  beforeEach(() => {
    inMemoryFoodsRepository = new InMemoryFoodsRepository();
    sut = new CreateFoodUseCase(inMemoryFoodsRepository);
  });

  it('should be able to create an food', async () => {
    const { food } = await sut.execute({
      name: 'Arroz',
      categoryId: '1',
    });

    expect(food.id).toBeTruthy();
    expect(inMemoryFoodsRepository.items[0].id).toEqual(food.id);
  });
});
