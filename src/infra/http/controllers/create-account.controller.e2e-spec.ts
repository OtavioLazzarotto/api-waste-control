import { PrismaService } from '@/infra/prisma/prisma.service';
import { INestApplication } from '@nestjs/common';

import request from 'supertest';
import { setupE2E } from '../../../../test/setup-e2e';

describe('Create account (E2E)', () => {
  let app: INestApplication;
  let teardown: () => Promise<void>;
  let db: PrismaService;

  beforeAll(async () => {
    const setup = await setupE2E();
    app = setup.app;
    db = setup.db;
    teardown = setup.teardown;
  });

  afterAll(async () => {
    if (teardown) {
      await teardown();
    }
  });

  test('[POST] /accounts', async () => {
    const response = await request(app.getHttpServer()).post('/accounts').send({
      name: 'otavio',
      username: 'otavio01',
      password: '123456',
      roles: 'USER',
    });

    expect(response.statusCode).toBe(201);

    const userOnDatabase = await db.user.findUnique({
      where: {
        username: 'otavio01',
      },
    });

    expect(userOnDatabase).toBeTruthy()
  });
});
