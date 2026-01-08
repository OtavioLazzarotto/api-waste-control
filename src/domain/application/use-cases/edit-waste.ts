import { UniqueEntityID } from '@/core/entities/unique-entity-id';
import { WastesRepository } from '../repositories/wastes-repository';
import { ReasonType } from '@/domain/enterprise/entities/waste';

export interface EditWasteUseCaseRequest {
  wasteId: string;
  mealItemId: string;
  quantity: number;
  reason: ReasonType;
}

export interface EditWasteUseCaseResponse {}

export class EditWasteUseCase {
  constructor(private wastesRepository: WastesRepository) {}

  async execute({
    wasteId,
    mealItemId,
    quantity,
    reason,
  }: EditWasteUseCaseRequest): Promise<EditWasteUseCaseResponse> {
    const waste = await this.wastesRepository.findById(wasteId);

    if (!waste) {
      throw new Error('Waste not found');
    }

    waste.mealItemId = new UniqueEntityID(mealItemId);
    waste.quantity = quantity
    waste.reason = reason

    await this.wastesRepository.save(waste);

    return {};
  }
}
