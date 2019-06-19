import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

const port = process.env.PORT || 3000;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  // tslint:disable-next-line:only-arrow-functions
  app.listen(port, function() {
    // tslint:disable-next-line:no-console
    console.log('Listening on ' + port);
  });
}
bootstrap();
