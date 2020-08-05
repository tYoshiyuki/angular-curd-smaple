import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Todo} from '../models/todo';

const baseUrl = 'http://localhost:3000/todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private http: HttpClient) {
  }

  getList(): Observable<Todo[]> {
    return this.http.get<Todo[]>(baseUrl);
  }

  get(id: number): Observable<Todo> {
    return this.http.get<Todo>(`${baseUrl}/${id}`);
  }
}
