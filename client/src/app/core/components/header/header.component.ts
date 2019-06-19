import { Component, OnInit } from '@angular/core';
import { TodoService } from 'src/app/shared/services/todo.service';
import { Todo } from 'src/app/shared/services/models/todo.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private todoService: TodoService) { }

  ngOnInit() {
  }

  addTodo() {
    const emptyTodo: Todo = {
      id: null,
      label: '',
      description: '',
      createdBy: 'larryjoelane',
      createdOn: new Date(),
      isComplete: false
    };

    // create an empty todo to start
    this.todoService.createTodo(emptyTodo)
     .subscribe();
  }

}
