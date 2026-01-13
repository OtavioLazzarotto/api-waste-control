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
    const result = await sut.execute({
      name: 'Arroz',
      categoryId: '1',
    });

    expect(result.isRight()).toBe(true);
    expect(inMemoryFoodsRepository.items[0]).toEqual(result.value?.food);
  });
});
