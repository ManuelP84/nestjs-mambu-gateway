import { BadRequestException, Logger, ValidationError, ValidationPipe } from '@nestjs/common';
import { HttpAdapterHost, NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { getTestClient } from './clients/helpers/get-test-client.helper';
import { HttpExceptionFilter } from './common/filters/http-exception.filter';

async function bootstrap() {
  const logger = new Logger('Bootstrap');
  const app = await NestFactory.create(AppModule, {cors: true});

  app.setGlobalPrefix('api/v1');

  app.useGlobalFilters(new HttpExceptionFilter());

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
    }),
  );

  await app.listen(process.env.APP_PORT);
  logger.log(`App running on port ${process.env.APP_PORT}`);
}
bootstrap();
