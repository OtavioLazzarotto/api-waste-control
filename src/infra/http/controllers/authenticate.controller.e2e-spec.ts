import { INestApplication } from '@nestjs/common';
import request from 'supertest';
import { hash } from 'bcryptjs';
import { PrismaService } from '@/infra/prisma/prisma.service';
import { setupE2E } from '../../../../test/setup-e2e';

describe('Authenticate (E2E)', () => {
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

  test('[POST] /sessions', async () => {
    await db.user.create({
      data: {
        name: 'otavio',
        username: 'otavio01',
        password: await hash('123456', 8),
        roles: 'USER',
      },
    });

    const response = await request(app.getHttpServer()).post('/sessions').send({
      username: 'otavio01',
      password: '123456',
    });

    expect(response.statusCode).toBe(201);
    expect(response.body).toEqual({
      access_token: expect.any(String),
    });
  });
});
