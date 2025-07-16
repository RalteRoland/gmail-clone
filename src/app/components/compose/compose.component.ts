import { Component, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  standalone: false,
  selector: 'app-compose',
  templateUrl: './compose.component.html',
  styleUrls: ['./compose.component.css'] //
})

export class ComposeComponent {
  @Output() close = new EventEmitter<void>();

  composeForm: FormGroup;

  recipients = [
    { id: 1, email: 'alice@example.com', avatar: 'https://example.com/avatar.jpg' },
    { id: 2, email: 'bob@example.com', avatar: 'https://example.com/avatar2.jpg' },
    { id: 3, email: 'charlie@example.com', avatar: 'https://example.com/avatar3.jpg' }
  ];

  constructor(private fb: FormBuilder) {
    this.composeForm = this.fb.group({
      to: [[], Validators.required],
      subject: [''],
      body: ['']
    });
  }

  onClose() {
    this.close.emit();
  }

  onSubmit() {
    if (this.composeForm.invalid) {
      this.composeForm.markAllAsTouched();
      return;
    }

    const formData = this.composeForm.value;
    console.log('Sending email:', formData);

    // Simulate success
    alert('Email sent successfully!');
    this.onClose(); // Close popup after send
  }

}
