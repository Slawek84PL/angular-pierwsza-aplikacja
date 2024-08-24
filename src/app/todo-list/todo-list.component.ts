import {Component, inject} from '@angular/core';
import {Todo} from "../shared/interfaces/todo.interface";
import {TodoService} from "../core/services/todo.service";

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {

  todoService = inject(TodoService);
  todos: Todo[] = this.todoService.todos;

  errorMessage = "";

  clearErrorMessage() {
    this.errorMessage = "";
  }

  addTodo(todo: string): void {

    if (todo.length <= 3) {
      this.errorMessage = "Zadanie powinno mieć conajmniej 4 znaki";
      return;
    }

    this.todoService.addTodo(todo);
    this.todos = this.todoService.todos;
  }

  deleteTodo(i: number) {
    this.todoService.deleteTodo(i);
    this.todos = this.todoService.todos;
  }

  changeTodoStatus(index: number) {
    this.todoService.changeTodoStatus(index);
    this.todos = this.todoService.todos;
  }
}
