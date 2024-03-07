import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SwapiService {
  baseURL = 'https://swapi.dev/api';
  constructor(private http: HttpClient) {}

  getPeople(id: number): Observable<unknown> {
    return this.http.get<unknown>(`${this.baseURL}/people/${id}`);
  }
}
