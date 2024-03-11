import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map, delay } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SwapiService {
  baseURL = 'http://localhost:3000/api';
  constructor(private http: HttpClient) {}

  getPeople(id: number): Observable<unknown> {
    return this.http
      .get<unknown>(`${this.baseURL}/people/${id}`)
      .pipe(delay(6000));
  }
}
