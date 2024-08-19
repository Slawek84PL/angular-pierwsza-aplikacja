import {AfterViewChecked, AfterViewInit, Component, Input, ViewChild, ViewChildren} from '@angular/core';
import {Todo} from "../shared/interfaces/todo.interface";
import {TodoComponent} from "./todo/todo.component";

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements AfterViewInit, AfterViewChecked {
  @Input() test!: string;
  @ViewChild(TodoComponent) todoComponent!: TodoComponent;

  @ViewChildren(TodoComponent) todoComponents!: TodoComponent;
  todos: Todo[] = [];
  errorMessage = "";

  ngAfterViewInit(): void {
    // console.log(this.addForm);
    console.log(this.todoComponent);

  }

  ngAfterViewChecked(): void {
    console.log(this.todoComponent);
  }

  // ngOnChanges(changes: SimpleChanges): void {
  //   console.log(changes);
  // }

  addTodo(todo: string): void {

    if (todo.length <= 3) {
      this.errorMessage = "Zadanie powinno mieć conajmniej 4 znaki";
      return;
    }

    this.todos.push({name: todo, isCompleted: false});
    // console.log("Aktualna lista todo: ", this.todos);
  }

  clearErrorMessage() {
    this.errorMessage = "";
  }

  deleteTodo(i: number) {
    this.todos = this.todos.filter((todo, index) => index !== i)
  }

  changeTodoStatus(index: number) {
    this.todos[index] = {
      ...this.todos[index],
      isCompleted: !this.todos[index].isCompleted
    }
  }
}
