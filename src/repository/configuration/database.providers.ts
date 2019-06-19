import { createConnection } from 'typeorm';
import { TodoEntity } from '../../services/content-service/repository/entities/todo.entity';


export const databaseProviders = [
  {
    provide: 'DATABASE_CONNECTION',
    useFactory: async () => await createConnection({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '',
      database: 'TodoService',
      entities: [
        TodoEntity,
      ],
      synchronize: true,
    })
  }
];
