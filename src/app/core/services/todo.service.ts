import { Injectable } from '@angular/core';
import {Todo} from "../../shared/interfaces/todo.interface";

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  _todos: Todo[] = JSON.parse(localStorage.getItem("todos")!) ?? [];

  constructor() { }

  public get todos() {
    return this._todos.slice();
  }

  addTodo(name: string): void {
    this.todos.push({name, isCompleted: false});
    this.saveToLocaleStorage()
  }

  deleteTodo(i: number) {
    this._todos = this.todos.filter((todo, index) => index !== i)
    this.saveToLocaleStorage();
  }

  changeTodoStatus(index: number) {
    this._todos[index] = {
      ...this._todos[index],
      isCompleted: !this._todos[index].isCompleted
    }
    this.saveToLocaleStorage();
  }

  saveToLocaleStorage() {
    localStorage.setItem("todos", JSON.stringify(this.todos));
  }
}
