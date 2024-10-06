import { Injectable } from '@angular/core';
import {Todo} from "../../shared/interfaces/todo.interface";
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  // private _todos: Todo[] = JSON.parse(localStorage.getItem("todos")!) ?? [];
  private _todos: Todo[] = [];
  todoChanged = new Subject<Todo[]>();

  constructor() { }

  public get todos() {
    return this._todos.slice();
  }

  public set todos(arrTodos: Todo[]) {
    this._todos = [...arrTodos];
    this.todoChanged.next(this.todos)
  }

  getByIndex(index: number): Todo | undefined {
    return this.todos[index];
  }

  addTodo(todo: Todo): void {
    this._todos.push(todo);
    this.todoChanged.next(this.todos);
  }

  deleteTodo(id: number) {
    this._todos = this.todos.filter((todo, index) => todo.id !== id)
    this.todoChanged.next(this.todos);
  }

  changeTodoStatus(id: number, isComplited: boolean) {
    const seartchedTodo = this.todos.find(todo=> todo.id === id);
    if (seartchedTodo) {
      seartchedTodo.isCompleted = isComplited;
    }
    this.todoChanged.next(this.todos);
  }

  // saveToLocaleStorage() {
  //   localStorage.setItem("todos", JSON.stringify(this.todos));
  // }
}
