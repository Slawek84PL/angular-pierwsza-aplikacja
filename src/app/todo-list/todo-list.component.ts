import {Component} from '@angular/core';
import {Todo} from "../shared/interfaces/todo.interface";
import {TodoService} from "../core/services/todo.service";

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
// implements AfterViewInit, AfterViewChecked
export class TodoListComponent {

  errorMessage = "";

  constructor(private todoService: TodoService) {
  }

  clearErrorMessage() {
    this.errorMessage = "";
  }

}
