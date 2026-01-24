import {
  BadRequestException,
  Body,
  Controller,
  HttpCode,
  Param,
  Put,
} from '@nestjs/common';
import z from 'zod';
import { ZodValidationPipe } from '../pipes/zod-validation-pipe';
import { EditMealItemUseCase } from '@/domain/application/use-cases/edit-meal-item';

const editMealItemBodySchema = z.object({
  mealId: z.uuid().optional(),
  foodId: z.uuid().optional(),
  quantityServed: z.coerce.number().optional(),
  quantityConsumeds: z.coerce.number().optional(),
});

const BodyValidationPipe = new ZodValidationPipe(editMealItemBodySchema);

type EditMealItemBodySchema = z.infer<typeof editMealItemBodySchema>;

@Controller('/mealItem/:id')
export class EditMealItemController {
  constructor(private editMealItem: EditMealItemUseCase) {}

  @Put()
  @HttpCode(204)
  async handle(
    @Body(BodyValidationPipe) body: EditMealItemBodySchema,
    @Param('id') mealItemId: string,
  ) {
    const { foodId, mealId, quantityConsumeds, quantityServed } = body;

    const result = await this.editMealItem.execute({
      foodId,
      mealId,
      quantityConsumeds,
      quantityServed,
      mealItemId,
    });

    if (result.isLeft()) {
      throw new BadRequestException();
    }
  }
}
