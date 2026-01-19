import { Body, Controller, Post } from "@nestjs/common";
import z from "zod";
import { ZodValidationPipe } from "../pipes/zod-validation-pipe";
import { CreateMealItemUseCase } from "@/domain/application/use-cases/create-meal-item";


const createMealItemBodySchema = z.object({
    mealId: z.uuid(),
    foodId: z.uuid(),
    quantityServed: z.number(),
    quantityConsumeds: z.number(),
})

const BodyValidationPipe = new ZodValidationPipe(createMealItemBodySchema)

type CreateMealItemBodySchema = z.infer<typeof createMealItemBodySchema>


@Controller('/mealItem')
export class CreateMealItemController {
    constructor(private createMealItem: CreateMealItemUseCase) {}

    @Post()
    async handle(@Body(BodyValidationPipe) body : CreateMealItemBodySchema) {
        const 
        {
            foodId, 
            mealId, 
            quantityConsumeds, 
            quantityServed
        } = body

        await this.createMealItem.execute({foodId, mealId, quantityConsumeds, quantityServed})
    }
}