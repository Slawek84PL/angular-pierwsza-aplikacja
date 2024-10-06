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

  getTodo(id: number): Observable<Todo> {
    return this.http.get<Todo>(`http://localhost:3000/todo/${id}`);
  }

  postTodo(todo: Omit<Todo, "id">): Observable<Todo> {
    return this.http.post<Todo>('http://localhost:3000/todo', todo).pipe(
      tap((todo: Todo) => this.todoService.addTodo(todo))
    );
  }

  deleteTodo(id: number): Observable<{}> {
    return this.http.delete<{}>(`http://localhost:3000/todo/${id}`).pipe(
      tap(() => this.todoService.deleteTodo(id))
    );
  }

  patchTodo(id: number, todo: Omit<Todo, "id" | "name">): Observable<Todo> {
    return this.http.patch<Todo>(`http://localhost:3000/todo/${id}`, todo).pipe(
      tap((todo: Todo) => this.todoService.changeTodoStatus(todo.id, todo.isCompleted))
    )
  }
}
