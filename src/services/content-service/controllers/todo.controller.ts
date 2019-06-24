import { Controller, Get, Post, Body, Delete, Param, Put } from '@nestjs/common';
import { TodoManager } from '../managers/todo.manager';
import { Todo } from './contracts/todo';
import { ApiResponse } from '@nestjs/swagger';
import { UpdateTodo } from './contracts/update-todo';
import { CreateTodo } from './contracts/create-todo';

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
  @ApiResponse({ status: 201, description: 'The todo has been successfully created.' })
  async createTodo(@Body() todo: CreateTodo) {
    return await this.todoManager.createTodo(todo);
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
  async updateTodo(@Param('id') id: number, @Body() todo: Todo): Promise<Todo> {
    return await this.todoManager.updateTodo(id, todo);
  }
}
