import { CreateFoodUseCase } from '@/domain/application/use-cases/create-food';
import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import z from 'zod';
import { ZodValidationPipe } from '../pipes/zod-validation-pipe';

const createFoodBodySchema = z.object({
  name: z.string(),
  categoryId: z.uuid(),
});

const bodyValidationPipe = new ZodValidationPipe(createFoodBodySchema);

type CreateFoodbodySchema = z.infer<typeof createFoodBodySchema>;

@Controller('/food')
export class CreateFoodController {
  constructor(private createFood: CreateFoodUseCase) {}

  @Post()
  async handle(@Body(bodyValidationPipe) body: CreateFoodbodySchema) {
    const { name, categoryId } = body;

    await this.createFood.execute({
      name,
      categoryId,
    });
  }
}
