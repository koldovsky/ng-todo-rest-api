import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { Todo } from './todo';

@Injectable()
export class TodolistService {

  readonly API_URL: string = 'http://localhost:3000/todos/'
  
  constructor(private http: HttpClient) { }

  getTodos(): Observable<Todo[]> {
    return this.http.get<Todo[]>(this.API_URL);
  }

}
