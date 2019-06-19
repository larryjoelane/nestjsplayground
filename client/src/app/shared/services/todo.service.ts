import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Todo } from './models/todo.model';
import { Observable, BehaviorSubject } from 'rxjs';
import { switchMap, tap, filter } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  private url: string;
  private todoStoreSubject: BehaviorSubject<Todo[]>;
  public todoStore$: Observable<Todo[]>;

  constructor(private http: HttpClient) {
    this.url = `${environment.apiRoot}/todo`;
    this.todoStoreSubject = new BehaviorSubject<Todo[]>(null);
    this.todoStore$ = this.todoStoreSubject.asObservable();
  }

  getTodos(): Observable<Todo[]> {
    return this.http.get<Todo[]>(this.url)
      .pipe(
        tap((updatedTodos: Todo[]) => {
          this.todoStoreSubject.next(updatedTodos);
        })
      );
  }

  updateTodo(todo: Todo): Observable<any> {
    return this.http.put<Todo>(`${this.url}/${todo.id}`, todo);
  }

  createTodo(todo: Todo): Observable<any> {
    return this.http.post<Todo>(this.url, todo)
      .pipe(
        switchMap(() => this.getTodos())
      );
  }
}
