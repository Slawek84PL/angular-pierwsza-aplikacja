import {Component} from '@angular/core';
import {Todo} from "../shared/interfaces/todo.interface";

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {
  todos: Todo[] = [];

  addTodo(todo : string) : void {

    if (todo.length <= 3) {
      alert("Zadanie powinno mieć conajmniej 4 znaki")
      return;
    }

    this.todos.push({name: todo, isCompleted: false});
    console.log("Aktualna lista todo: ", this.todos);
  }

  changeTodoStatus(todo: Todo) {
    todo.isCompleted = !todo.isCompleted;
    // this.todos[i].isCompleted = !this.todos[i].isCompleted;
    console.log(this.todos);
  }
}
