import {Component, Input} from '@angular/core';
import {Todo} from "../../shared/interfaces/todo.interface";

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {

  @Input() todo!: Todo;
  @Input() i!: number;

  changeTodoStatus(todo: Todo) {
    todo.isCompleted = !todo.isCompleted;
  }
}
