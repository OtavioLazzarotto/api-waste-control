import { UniqueEntityID } from '@/core/entities/unique-entity-id';
import { makeWaste } from '../../../../test/factories/make-waste';
import { InMemoryWastesRepository } from '../../../../test/repositories/in-memory-wastes-repository';
import { GetWasteByIdUseCase } from './get-by-id-waste';

let inMemoryWastesRepository: InMemoryWastesRepository;
let sut: GetWasteByIdUseCase;

describe('Get By Id Waste', () => {
  beforeEach(() => {
    inMemoryWastesRepository = new InMemoryWastesRepository();
    sut = new GetWasteByIdUseCase(inMemoryWastesRepository);
  });

  it('should be able to get a waste by id', async () => {
    const newWaste = makeWaste({}, new UniqueEntityID('waste-1'));

    await inMemoryWastesRepository.create(newWaste);

    const { waste } = await sut.execute({
      wasteId: 'waste-1',
    });

    expect(waste.id).toBeTruthy();
    expect(waste.id).toEqual(newWaste.id);
  });
});
