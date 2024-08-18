import {Component, Input, OnChanges, SimpleChanges} from '@angular/core';
import {Todo} from "../shared/interfaces/todo.interface";

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnChanges {

  @Input() test!: string;

  todos: Todo[] = [];
  errorMessage = "";

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }

  addTodo(todo: string): void {

    if (todo.length <= 3) {
      this.errorMessage = "Zadanie powinno mieć conajmniej 4 znaki";
      return;
    }

    this.todos.push({name: todo, isCompleted: false});
    console.log("Aktualna lista todo: ", this.todos);
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
