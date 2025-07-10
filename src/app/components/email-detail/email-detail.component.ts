import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-email-detail',
  standalone: false,
  templateUrl: './email-detail.component.html',
  styleUrl: './email-detail.component.css'
})
export class EmailDetailComponent {
  @Input() email: any;
  @Output() close = new EventEmitter<void>();

  closeEmail() {
    this.close.emit();
  }
}
