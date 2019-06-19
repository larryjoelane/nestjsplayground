import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Todo } from '../../services/models/todo.model';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

  @Input() todos: Todo[];
  @Output() todoChange: EventEmitter<Todo>;

  constructor() {
    this.todoChange = new EventEmitter<Todo>();
  }

  ngOnInit() {
  }

  updateTodo($event: EventTarget, todo: Todo) {
    this.todoChange.emit(todo);
  }

  completeTodo($event, todo) {
    this.todoChange.emit(todo);
  }

}
