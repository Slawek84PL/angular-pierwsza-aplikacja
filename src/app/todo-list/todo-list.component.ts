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

    if (this.todoService.todos.length === 0) {
      this.todoApiService.getTodos().subscribe({
        error: err => {
          this.errorMessage = "Wystąpił błąd. Spróbuj ponownie.";
        }
      })
    }
  }

  clearErrorMessage() {
    this.errorMessage = "";
  }

  addTodo(todo: string): void {
    this.todoApiService.postTodo({name: todo, isCompleted: false}).subscribe({
      next: value => {
        console.log(value);
      },
      error: err => {
        this.errorMessage = "Wystąpił błąd. Spróbuj ponownie.";
      }
    })
  }

  deleteTodo(id: number) {
    this.todoApiService.deleteTodo(id).subscribe({
      next: value => {
        console.log(value);
      },
      error: err => {
        this.errorMessage = "Wystąpił błąd. Spróbuj ponownie.";
      }
    })
    // this.todoService.deleteTodo(id);
  }

  changeTodoStatus(index: number) {
    this.todoService.changeTodoStatus(index);
  }
}
