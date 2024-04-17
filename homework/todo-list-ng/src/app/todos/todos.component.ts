import { Component } from '@angular/core';
import { AsyncPipe, NgFor } from '@angular/common';

import { ToDo } from '../todo';
import { TodoComponent } from '../todo/todo.component';
import { Observable } from 'rxjs';
import { TodoMockService as TodoService } from '../todo-mock.service';

@Component({
  selector: 'app-todos',
  standalone: true,
  imports: [TodoComponent, AsyncPipe, NgFor],
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.css',
})
export class TodosComponent {
  todos$: Observable<ToDo[]>;

  constructor(private todoService: TodoService) {
    this.todos$ = this.todoService.getTodos();
  }

  addTodo() {
    this.todoService.addTodo('New Task');
  }
}
