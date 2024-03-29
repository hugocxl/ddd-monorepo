// Dependencies
import { NestFactory } from '@nestjs/core';

// Module
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: '*',
    methods: ['GET', 'POST', 'OPTIONS'],
    allowedHeaders: ['Content-Type'],
  });

  await app.listen(8000);
}

bootstrap();
