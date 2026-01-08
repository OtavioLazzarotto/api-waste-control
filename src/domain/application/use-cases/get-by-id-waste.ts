import { Waste } from "@/domain/enterprise/entities/waste";
import { WastesRepository } from "../repositories/wastes-repository";


export interface GetWasteByIdUseCaseRequest {
  wasteId: string;
}

export interface GetWasteByIdUseCaseResponse {
  waste: Waste;
}

export class GetWasteByIdUseCase {
  constructor(private wastesRepository: WastesRepository) {}

  async execute({
    wasteId,
  }: GetWasteByIdUseCaseRequest): Promise<GetWasteByIdUseCaseResponse> {
    const waste = await this.wastesRepository.findById(wasteId);

    if (!waste) {
      throw new Error('Waste not found');
    }

    return {
      waste,
    };
  }
}
