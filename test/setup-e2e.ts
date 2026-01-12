import { randomUUID } from 'crypto';
import { execSync } from 'child_process';
import { Test } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import { PrismaClient } from '@/generated/prisma/client';
import { AppModuleTest } from '@/AppModuleTest.module';
import { PrismaService } from '@/prisma/prisma.service';

export async function setupE2E(): Promise<{
  app: INestApplication;
  teardown: () => Promise<void>;
  db: PrismaService
}> {
  const schemaId = `test_${randomUUID().replace(/-/g, '').slice(0, 20)}`;

  const url = new URL(process.env.DATABASE_URL!);
  url.searchParams.set('schema', schemaId);
  process.env.DATABASE_URL = url.toString();

  execSync('npx prisma migrate deploy', {
    stdio: 'inherit',
    env: {
      ...process.env,
    },
  });

  const moduleRef = await Test.createTestingModule({
    imports: [AppModuleTest],
  }).compile();

  const app = moduleRef.createNestApplication();
  const db = moduleRef.get(PrismaService)
  await app.init();

  const prisma = new PrismaClient({
    datasources: {
      db: {
        url: process.env.DATABASE_URL!,
      },
    },
  });

  const teardown = async () => {
    await prisma.$executeRawUnsafe(
      `DROP SCHEMA IF EXISTS "${schemaId}" CASCADE`,
    );
    await prisma.$disconnect();
    await app.close();
  };

  return {
    app,
    db,
    teardown,
  };
}
