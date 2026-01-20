import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { config } from 'dotenv';
import { join } from 'path';
import { NestExpressApplication } from '@nestjs/platform-express';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule, {
    cors: true,
  });
  app.setGlobalPrefix('api/v1');
  app.useStaticAssets(join(process.cwd(), 'uploads'), {
    prefix: '/uploads',
  });
  config(); // load .env
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
