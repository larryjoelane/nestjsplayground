import { Module, MiddlewareConsumer, RequestMethod } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { todoProviders } from './repository/providers/todo';
import { DatabaseModule } from './repository/configuration/database.module';
import { TodoController } from './services/content-service/controllers/todo.controller';
import { TodoManager } from './services/content-service/managers/todo.manager';
import { AuthenticationMiddleware } from './common/middleware/authentication.middleware';

@Module({
  imports: [DatabaseModule],
  controllers: [AppController, TodoController],
  providers: [
    AppService,
     ...todoProviders,
    TodoManager,
  ],
})
export class AppModule {

  public configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(AuthenticationMiddleware)
      .forRoutes(
        TodoController,
      );
  }
}
