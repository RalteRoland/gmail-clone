import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'frontend-for-noobs';
  isExpandedSidebar = false;
  isComposeOpen = false;
  selectedEmail: any = null;

  toggleSidebar() {
    this.isExpandedSidebar = !this.isExpandedSidebar;
  }

  openComposePopup() {
    this.isComposeOpen = true;
  }

  closeCompose() {
    this.isComposeOpen = false;
  }

  openEmail(email: any) {
    this.selectedEmail = email;
  }

  closeEmail() {
    this.selectedEmail = null;
  }
}
