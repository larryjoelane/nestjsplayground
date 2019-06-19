import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoComponent } from './components/todo/todo.component';

@NgModule({
  declarations: [
  TodoComponent],
  exports: [
    TodoComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
