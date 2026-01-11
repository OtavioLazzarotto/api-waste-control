import { Module } from '@nestjs/common';
import { PrismaService } from './prisma/prisma.service';
import { CreateAccountController } from './infra/controllers/create-account.controller';
import { FetchRecentUserController } from './infra/controllers/fetch-recent-user.controller';
import { ConfigModule } from '@nestjs/config';
import { envSchema } from './env';
import { AuthenticateController } from './infra/controllers/authenticate-controller';
import { AuthModule } from './infra/auth/auth.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      validate: (env) => envSchema.parse(env),
      isGlobal: true,
    }),
    AuthModule,
  ],
  controllers: [
    CreateAccountController,
    AuthenticateController,
    FetchRecentUserController,
  ],
  providers: [PrismaService],
})
export class AppModule {}
