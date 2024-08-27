import {Component, ContentChild, ElementRef, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {BehaviorSubject, Subject, Subscription} from "rxjs";

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit, OnDestroy {

  @Input() title!: string;
  @Output() close = new EventEmitter<void>();
  @ContentChild('modalDiv') modalDiv!: ElementRef;
  sub: Subscription = new Subscription();

  ngOnInit(): void {
    // this.sub = of("Zasubskrybowana wiadomość").subscribe({
    //   next: value => console.log(value),
    //   error: err => console.log(err),
    //   complete: () => console.log("Zakończona subskrpcja wartości")
    // })
    const subject = new Subject<number>();
    const bSubject = new BehaviorSubject<number>(5);

    subject.next(5);
    this.sub.add(subject.subscribe({
      next: value => console.log(value)
    }))

    bSubject.next(10);
    this.sub.add(bSubject.subscribe({
      next: value => console.log(value)
    }))
    console.log(this.sub);
  }

  ngOnDestroy(): void {
    if (this.sub) {
      this.sub.unsubscribe();
    }
    console.log(this.sub);
  }

  onClose() {
    // this.sub.unsubscribe();
    this.close.emit();
  }
}
