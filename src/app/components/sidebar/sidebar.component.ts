import { Component, EventEmitter, Output } from '@angular/core';


@Component({
  selector: 'app-sidebar',
  standalone: false,
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  isExpanded = false;

  @Output() toggleSidebar = new EventEmitter<void>();

  onToggleClick() {
    this.toggleSidebar.emit();
  }

}
