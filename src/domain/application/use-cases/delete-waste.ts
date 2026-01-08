import { WastesRepository } from "../repositories/wastes-repository";

export interface DeleteWasteUseCaseRequest {
  wasteId: string;
}

export interface DeleteWasteUseCaseResponse {}

export class DeleteWasteUseCase {
  constructor(private wastesRepository: WastesRepository) {}

  async execute({
    wasteId,
  }: DeleteWasteUseCaseRequest): Promise<DeleteWasteUseCaseResponse> {
    const waste = await this.wastesRepository.findById(wasteId);

    if (!waste) {
      throw new Error('Waste not found');
    }

    await this.wastesRepository.delete(waste);

    return {};
  }
}
