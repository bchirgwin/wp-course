import { Injectable } from '@angular/core';
import { ToDo } from './todo';
import { Observable, of, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';

const url = 'http://localhost:3000/api/todos';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  todos = [];
  constructor(private httpClient: HttpClient) {}

  getTodos(): Observable<ToDo[]> {
    console.log('getTodos');
    return this.httpClient
      .get(url)
      .pipe(tap<any>((result) => console.log(result)));
  }

  getTodo(id: number): void {}

  addTodo(title: string): void {}

  putTodo(id: number): void {}
}
