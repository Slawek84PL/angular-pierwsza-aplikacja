import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {defer, from, Subscription} from "rxjs";

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit, OnDestroy {

  @Input() title!: string;
  @Output() close = new EventEmitter<void>();
  sub = new Subscription;

  ngOnInit(): void {
    // this.sub = of("Zasubskrybowana wiadomość").subscribe({
    //   next: value => console.log(value),
    //   error: err => console.log(err),
    //   complete: () => console.log("Zakończona subskrpcja wartości")
    // })
    // console.log(this.sub);
    const promis = () => new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log("Test");
        resolve("Hello World");
      }, 1000)
    });
    const obs$ = defer(() => from(promis()));
    this.sub = obs$.subscribe({
      next: value => console.log(value)
    });
    console.log(this.sub)
  }

  ngOnDestroy(): void {
    // if (this.sub) {
    //   this.sub.unsubscribe();
    // }
    console.log(this.sub);
  }

  onClose() {
    // this.sub.unsubscribe();
    this.close.emit();
  }
}
