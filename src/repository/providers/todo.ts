import { Connection } from 'typeorm';
import { TodoEntity } from '../../services/content-service/repository/entities/todo.entity';

export const todoProviders = [
  {
    provide: 'TODO_REPOSITORY',
    useFactory: (connection: Connection) => connection.getRepository(TodoEntity),
    inject: ['DATABASE_CONNECTION'],
  },
];
