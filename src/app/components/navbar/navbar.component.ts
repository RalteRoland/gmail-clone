import { Component } from '@angular/core';
import { SearchService } from '../../services/search.service';

@Component({
  standalone: false,
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent {
  searchText: string = '';

  selectedStatus = {
    label: 'Active',
    color: '#34a853',
    subtext: 'Based on chat activity'
  };

  statusOptions = [
    { label: 'Active', color: '#34a853', subtext: 'Based on chat activity' },
    { label: 'Do Not Disturb', color: '#ea4335', subtext: 'Mute chat notifications' },
    { label: 'Away', color: '#fbbc04', subtext: 'Appear away' },
    { label: 'Invisible', color: '#80868b', subtext: 'Hide online presence' },
    { label: 'Chat Notification Setting', color: '', subtext: '' }
  ];


  constructor(private searchService: SearchService) {}

  onSearchChange() {
    this.searchService.updateSearch(this.searchText);
  }

  onStatusChange(status: any) {
    this.selectedStatus = status;
  }
}
