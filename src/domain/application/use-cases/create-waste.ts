import { UniqueEntityID } from '@/core/entities/unique-entity-id';
import { ReasonType, Waste } from '@/domain/enterprise/entities/waste';
import { WastesRepository } from '../repositories/wastes-repository';

interface CreateWasteUseCaseRequest {
  mealItemId: string;
  quantity: number;
  reason: ReasonType;
}

interface CreateWasteUseCaseResponse {
  waste: Waste
}

export class CreateWasteUseCase {
  constructor(private wastesRepository: WastesRepository) {}

  async execute({
    mealItemId,
    quantity,
    reason
  }: CreateWasteUseCaseRequest): Promise<CreateWasteUseCaseResponse> {
    const waste = Waste.create({
      quantity,
      mealItemId: new UniqueEntityID(mealItemId),
      reason
    });

    await this.wastesRepository.create(waste);

    return {
      waste,
    };
  }
}
