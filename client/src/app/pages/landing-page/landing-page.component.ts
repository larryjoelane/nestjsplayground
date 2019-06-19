import { Component, OnInit } from '@angular/core';
import { TodoService } from 'src/app/shared/services/todo.service';
import { Observable, BehaviorSubject } from 'rxjs';
import { Todo } from 'src/app/shared/services/models/todo.model';
import { debounceTime, switchMap, distinctUntilChanged } from 'rxjs/operators';


@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {

  todos$: Observable<Todo[]>;

  constructor(private todoService: TodoService) {
  }

  ngOnInit() {
    this.todoService.getTodos()
      .subscribe((updatedTodos: Todo[]) =>
        this.todos$ = this.todoService.todoStore$);
  }

  updateTodo(todo: Todo) {
    this.todoService.updateTodo(todo)
      .subscribe();
  }

}
