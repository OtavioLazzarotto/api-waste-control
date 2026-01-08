import { Waste } from "@/domain/enterprise/entities/waste";
import { WastesRepository } from "../repositories/wastes-repository";


export interface FetchRecentWastesUseCaseRequest {
  page: number;
}

export interface FetchRecentWastesUseCaseResponse {
  wastes: Waste[];
}

export class FetchRecentWastesUseCase {
  constructor(private wastesRepository: WastesRepository) {}

  async execute({
    page,
  }: FetchRecentWastesUseCaseRequest): Promise<FetchRecentWastesUseCaseResponse> {
    const wastes = await this.wastesRepository.findManyRecent({ page });

    return {
      wastes,
    };
  }
}
