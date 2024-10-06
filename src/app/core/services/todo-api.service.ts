import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, tap} from "rxjs";
import {Todo} from "../../shared/interfaces/todo.interface";
import {TodoService} from "./todo.service";

@Injectable({
  providedIn: 'root'
})
export class TodoApiService {

  constructor(private http: HttpClient,
              private todoService: TodoService) {
  }

  getTodos(): Observable<Todo[]> {
    return this.http.get<Todo[]>('http://localhost:3000/todo').pipe(
      tap((todos: Todo[]) => {
        this.todoService.todos = todos;
      })
    );
  }

  postTodo(todo: Omit<Todo, "id">): Observable<Todo> {
    return this.http.post<Todo>('http://localhost:3000/todo', todo).pipe(
      tap((todo: Todo) => this.todoService.addTodo(todo))
    );
  }

  deleteTodo(id: number): Observable<any> {
    return this.http.delete<any>(`http://localhost:3000/todo/${id}`);
  }
}
