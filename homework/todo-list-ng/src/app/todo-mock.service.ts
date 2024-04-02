import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface ToDo {
  id: number;
  title: string;
  completed: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class TodoMockService {
  todos: ToDo[] = [
    { id: 1, title: 'Read', completed: false },
    { id: 2, title: 'Write', completed: false },
    { id: 3, title: 'Take Out Trash', completed: false },
  ];

  constructor() {}

  getTodos(): Observable<ToDo[]> {
    return of(this.todos);
  }

  addTodo(title: string) {
    this.todos.push({ id: this.todos.length, title, completed: false });
  }
}
