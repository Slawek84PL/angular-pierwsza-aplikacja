import {Component, ContentChild, ElementRef, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {of} from "rxjs";

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit, OnDestroy {

  ngOnInit(): void {
    of([1, 2, 3], [4, 5], [6, 7]).subscribe({
      next: value => console.log(value),
      error: err => console.log(err),
      complete: () => console.log("Zakończona subskrpcja tablic")
    });
    of("Zasubskrybowana wiadomość").subscribe({
      next: value => console.log(value),
      error: err => console.log(err),
      complete: () => console.log("Zakończona subskrpcja wartości")
    })
    of({obiekt: "Zasubskrybowany obiekt"}, {obiekt: "Zasubskrybowany obiekt 2"}).subscribe({
      next: value => console.log(value),
      error: err => console.log(err),
      complete: () => console.log("Zakończona subskrpcja obieków")
    })
  }

  ngOnDestroy(): void {
  }

  @Input() title!: string;
  @Output() close = new EventEmitter<void>();
  @ContentChild('modalDiv') modalDiv!: ElementRef;

  onClose() {
    this.close.emit();
  }
}
