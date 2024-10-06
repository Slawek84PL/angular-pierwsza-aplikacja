import {Component, ElementRef, EventEmitter, Input, Output, ViewChild} from '@angular/core';
import {Todo} from "../../shared/interfaces/todo.interface";
import {ActivatedRoute, NavigationExtras, Router} from "@angular/router";

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})

// implements OnChanges
// implements OnInit
// implements OnChanges, DoCheck
// implements OnDestroy, OnInit
export class TodoComponent {
  @Input() todo!: Todo;

  @Input() id!: number;
  @Input() i!: number;
  @Output() delete = new EventEmitter<void>();
  @Output() changeStatus = new EventEmitter<number>();
  @ViewChild("li") li!: ElementRef;
  openModal: boolean = false;
  // timeout!: number;

  keyValueTest = {name: "nazwa", number: 1}

  // ngAfterViewInit(): void {
  //   console.log(this.li);
  // }

  // ngOnChanges(changes: SimpleChanges): void {

  //   console.log(changes);
  // }
  //
  // ngDoCheck(): void {
  //   console.log("ngDoCheck został wykonany");
  // }
  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
  }
  //

  // ngOnInit(): void {
  //   this.timeout = setTimeout(() => {
  //     console.log("setTimeout")
  //   }, 3000);
  // console.log('OnInit: ' + this.todo);
  // }
  //
  // ngOnDestroy(): void {
  //   console.log('destroyed');
  //   clearTimeout(this.timeout);
  // }

  changeTodoStatus() {
    this.changeStatus.emit(this.id);
  }

  toggleModal(): void {
    this.openModal = !this.openModal;
  }

  deleteTodo() {
    this.delete.emit();
  }

  navigateToDetails() {
    const navigationExtras: NavigationExtras = {
      relativeTo: this.activatedRoute,
      state: {example: 'test'}
      // queryParams: {id: this.i, test: 'wartość'}
    }
    this.router.navigate([this.id], navigationExtras);
  }
}
