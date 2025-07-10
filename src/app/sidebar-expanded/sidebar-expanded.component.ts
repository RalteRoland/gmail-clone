import { Component, EventEmitter, Output } from '@angular/core';


@Component({
  selector: 'app-sidebar-expanded',
  standalone: false,
  templateUrl: './sidebar-expanded.component.html',
  styleUrl: './sidebar-expanded.component.css'
})
export class SidebarExpandedComponent {
  @Output() compose = new EventEmitter<void>();

  onComposeClick() {
    this.compose.emit();
  }
}
