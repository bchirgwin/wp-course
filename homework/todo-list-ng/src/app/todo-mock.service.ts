import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ToDo } from './todo';

@Injectable({
  providedIn: 'root',
})
export class TodoMockService {
  todos: ToDo[] = [
    { id: 1, name: 'Read', completed: false },
    { id: 2, name: 'Write', completed: false },
    { id: 3, name: 'Take Out Trash', completed: false },
  ];

  constructor() {}

  getTodos(): Observable<ToDo[]> {
    return of(this.todos);
  }

  addTodo(name: string) {
    this.todos.push({ id: this.todos.length, name, completed: false });
  }
}
