import { Component } from '@angular/core';
import { AsyncPipe, NgFor } from '@angular/common';

import { TodoComponent } from '../todo/todo.component';
import { ToDo, TodoMockService } from '../todo-mock.service';
import { Observable, from } from 'rxjs';

@Component({
  selector: 'app-todos',
  standalone: true,
  imports: [TodoComponent, AsyncPipe, NgFor],
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.css',
})
export class TodosComponent {
  todos$: Observable<ToDo[]>;

  constructor(private todoService: TodoMockService) {
    this.todos$ = this.todoService.getTodos();
  }

  addTodo() {
    this.todoService.addTodo('New Task');
  }
}
