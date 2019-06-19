import { Injectable, Inject } from '@nestjs/common';
import { Repository, DeleteResult, UpdateResult, UpdateEvent, UpdateQuery } from 'typeorm';
import { TodoModel } from './models/todo';
import { Todo } from '../controllers/contracts/todo';
import { TodoEntity } from '../repository/entities/todo.entity';

@Injectable()
export class TodoManager {
  constructor(
    @Inject('TODO_REPOSITORY')
    private readonly todoRepository: Repository<TodoEntity>,
  ) { }

  async findAll(): Promise<TodoModel[]> {
    const todos = await this.todoRepository.find();
    return this.filterTodosByDate(todos);
  }

  async createLink(todo: TodoModel): Promise<TodoModel> {
    return await this.todoRepository.save(todo);
  }

  async deleteTodo(id: number): Promise<DeleteResult> {
    return await this.todoRepository.delete(id);
  }

  async findTodo(id: number): Promise<TodoModel> {
    return await this.todoRepository.findOne(id);
  }

  async updateTodo(id: number, todo: Todo): Promise<UpdateResult> {
    return await this.todoRepository.update(id, todo);
  }

  private filterTodosByDate(todo: Todo[]) {
    return todo.filter(todoValue => !todoValue.isComplete).sort((a, b) =>
      b.createdOn.valueOf() - a.createdOn.valueOf());
  }

}
