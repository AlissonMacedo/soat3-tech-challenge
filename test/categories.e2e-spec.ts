import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { TestingModule, Test } from '@nestjs/testing';
import { AppModule } from './../src/app.module';

describe('Categories (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/ (GET)', () => {
    return request(app.getHttpServer())
      .get('/')
      .expect(200)
      .expect('Hello World!');
  });
});
