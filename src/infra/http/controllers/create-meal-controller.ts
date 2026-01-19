import { CreateMealUseCase } from '@/domain/application/use-cases/create-meal';
import { TurnsType as PrismaTurnsType } from '@/generated/prisma/enums';
import { Body, Controller, Post } from '@nestjs/common';
import z from 'zod';
import { ZodValidationPipe } from '../pipes/zod-validation-pipe';
import { CurrentUser } from '@/infra/auth/current-user-decorator';
import type { UserPayload } from '@/infra/auth/jwt.strategy';
import { TurnsType } from '@/domain/enterprise/entities/meal';

const createMealBodySchema = z.object({
  date: z.coerce.date(),
  turn: z.enum(PrismaTurnsType),
});

const bodyValidationPipe = new ZodValidationPipe(createMealBodySchema);

type CreateMealBodySchema = z.infer<typeof createMealBodySchema>;

@Controller('/meal')
export class CreateMealController {
  constructor(private createMeal: CreateMealUseCase) {}

  @Post()
  async handle(
    @Body(bodyValidationPipe) body: CreateMealBodySchema,
    @CurrentUser() user: UserPayload,
  ) {
    const { date, turn } = body;

    const userId = user.sub;

    await this.createMeal.execute({
      date,
      turn: turn as TurnsType,
      userId,
    });
  }
}
