import {Component, DoCheck, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {Todo} from "../../shared/interfaces/todo.interface";

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})

// implements OnChanges
// implements OnInit
export class TodoComponent implements OnChanges, DoCheck {
  @Input() todo!: Todo;

  @Input() i!: number;
  @Output() delete = new EventEmitter<void>();
  @Output() changeStatus = new EventEmitter<number>();
  openModal: boolean = false;

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }

  ngDoCheck(): void {
    console.log("ngDoCheck został wykonany");
  }

  // constructor() {
  //   console.log('Konstruktor ' + this.todo);
  // }
  //
  // ngOnInit(): void {
  //   console.log('OnInit: ' + this.todo);
  // }

  changeTodoStatus() {
    // this.changeStatus.emit(this.i);
    this.todo.isCompleted = !this.todo.isCompleted;
  }

  toggleModal(): void {
    this.openModal = !this.openModal;
  }

  deleteTodo() {
    this.delete.emit();
  }
}
