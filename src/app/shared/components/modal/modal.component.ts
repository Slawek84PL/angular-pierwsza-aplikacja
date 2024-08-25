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
  obs$ = interval(1000);

  ngOnInit(): void {
    // this.sub = of("Zasubskrybowana wiadomość").subscribe({
    //   next: value => console.log(value),
    //   error: err => console.log(err),
    //   complete: () => console.log("Zakończona subskrpcja wartości")
    // })
    // console.log(this.sub);
  }

  ngOnDestroy(): void {
    // console.log(this.sub);
  }

  onClose() {
    // this.sub.unsubscribe();
    this.close.emit();
  }
}
