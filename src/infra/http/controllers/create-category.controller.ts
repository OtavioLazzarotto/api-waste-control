import { CreateCategoryUseCase } from '@/domain/application/use-cases/create-category';
import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import z from 'zod';
import { ZodValidationPipe } from '../pipes/zod-validation-pipe';
import { AuthGuard } from '@nestjs/passport';

const createCategoryBodySchema = z.object({
  name: z.string(),
});

const bodyValidationPipe = new ZodValidationPipe(createCategoryBodySchema);

type CreateCategoryBodySchema = z.infer<typeof createCategoryBodySchema>;

@Controller('/category')
export class CreateCategoryController {
  constructor(private createCategory: CreateCategoryUseCase) {}

  @Post()
  async handle(@Body(bodyValidationPipe) body: CreateCategoryBodySchema) {
    const { name } = body;

    await this.createCategory.execute({
      name,
    });
  }
}
