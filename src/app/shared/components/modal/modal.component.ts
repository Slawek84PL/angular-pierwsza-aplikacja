import {Component, ContentChild, ElementRef, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {interval, of, Subscription, take} from "rxjs";

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit, OnDestroy {

  @Input() title!: string;
  @Output() close = new EventEmitter<void>();
  @ContentChild('modalDiv') modalDiv!: ElementRef;
  sub!: Subscription;

  ngOnInit(): void {
    // this.sub = of("Zasubskrybowana wiadomość").subscribe({
    //   next: value => console.log(value),
    //   error: err => console.log(err),
    //   complete: () => console.log("Zakończona subskrpcja wartości")
    // })
    this.sub = interval(1000).pipe(take(5)).subscribe({
      next: number => console.log(number)
    })
    console.log(this.sub);
  }

  ngOnDestroy(): void {
    console.log(this.sub);
  }

  onClose() {
    // this.sub.unsubscribe();
    this.close.emit();
  }
}
