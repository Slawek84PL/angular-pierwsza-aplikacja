import {Component, OnInit} from '@angular/core';
import {Todo} from "../shared/interfaces/todo.interface";
import {TodoService} from "../core/services/todo.service";
import {TestService} from "../core/services/test.service";
import {TodoApiService} from "../core/services/todo-api.service";

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  todos: Todo[] = this.todoService.todos;
  errorMessage = "";

  constructor(private todoService: TodoService,
              private testService: TestService,
              private todoApiService: TodoApiService) {
  }

  ngOnInit(): void {
    this.todoService.todoChanged.subscribe({
      next: arrTodos => this.todos = arrTodos
    })

    this.todoApiService.getTodos().subscribe({
        next: todos =>
          // console.log(todos)
          this.todos = todos
      }
    )
  }

  clearErrorMessage() {
    this.errorMessage = "";
  }

  addTodo(todo: string): void {

    if (todo.length <= 3) {
      this.errorMessage = "Zadanie powinno mieć conajmniej 4 znaki";
      return;
    }

    this.todoService.addTodo(todo);
  }

  deleteTodo(i: number) {
    this.todoService.deleteTodo(i);
  }

  changeTodoStatus(index: number) {
    this.todoService.changeTodoStatus(index);
  }
}
