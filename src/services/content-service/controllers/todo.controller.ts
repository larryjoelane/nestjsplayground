import { Controller, Get, Post, Body, Delete, Param, Put } from '@nestjs/common';
import { TodoManager } from '../managers/todo.manager';
import { Todo } from './contracts/todo';
import { TodoModel } from '../managers/models/todo';
import { UpdateResult } from 'typeorm';

@Controller('todo')
export class TodoController {
  constructor(
    private readonly todoManager: TodoManager,
  ) { }

  @Get()
  async findAllTodos(): Promise<Todo[]> {
    return await this.todoManager.findAll();
  }

  @Post()
  async createTodo(@Body() todo: Todo) {
    return await this.todoManager.createLink(todo);
  }

  @Delete(':id')
  async deleteTodo(@Param('id') id: number) {
    return await this.todoManager.deleteTodo(id);
  }

  @Get(':id')
  async findOneTodo(@Param('id') id: number) {
    return await this.todoManager.findTodo(id);
  }

  @Put(':id')
  async updateTodo(@Param('id') id: number, @Body() todo: Todo): Promise<UpdateResult> {
    return await this.todoManager.updateTodo(id, todo);
  }
}