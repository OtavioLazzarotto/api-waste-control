import { WastesRepository } from "@/domain/application/repositories/wastes-repository";
import { Waste } from "@/domain/enterprise/entities/waste";
import { PaginationParams } from "@/domain/enterprise/repositories/pagination-params";

export class PrismaWastesRepository implements WastesRepository {
    findById(id: string): Promise<Waste | null> {
        throw new Error("Method not implemented.");
    }
    findManyRecent(params: PaginationParams): Promise<Waste[]> {
        throw new Error("Method not implemented.");
    }
    create(meal: Waste): Promise<void> {
        throw new Error("Method not implemented.");
    }
    save(meal: Waste): Promise<void> {
        throw new Error("Method not implemented.");
    }
    delete(meal: Waste): Promise<void> {
        throw new Error("Method not implemented.");
    }
}