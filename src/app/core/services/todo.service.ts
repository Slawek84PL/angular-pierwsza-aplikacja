import { Injectable } from '@angular/core';
import {Todo} from "../../shared/interfaces/todo.interface";

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  private _todos: Todo[] = JSON.parse(localStorage.getItem("todos")!) ?? [];

  constructor() { }

  public get todos() {
    return this._todos.slice();
  }

  addTodo(name: string): void {
    this._todos.push({name, isCompleted: false});
    this.saveToLocaleStorage()
  }

  deleteTodo(i: number) {
    this._todos = this.todos.filter((todo, index) => index !== i)
    this.saveToLocaleStorage();
  }

  changeTodoStatus(index: number) {
    this._todos[index] = {
      ...this.todos[index],
      isCompleted: !this.todos[index].isCompleted
    }
    this.saveToLocaleStorage();
  }

  saveToLocaleStorage() {
    localStorage.setItem("todos", JSON.stringify(this.todos));
  }

  log() {
    console.log("Komunikat z wstrzyknietego serwisu")
  }
}
