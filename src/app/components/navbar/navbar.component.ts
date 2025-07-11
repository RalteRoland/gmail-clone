import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: false,
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  currentStatus = 'Active';

  statusColorMap: { [key: string]: string } = {
    'Active': '#34a853',
    'Do Not Disturb': '#ea4335',
    'Away': '#fbbc04',
    'Invisible': '#80868b'
  };

  setStatus(status: string) {
    this.currentStatus = status;
  }
}
