import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-inbox',
  standalone: false,
  templateUrl: './inbox.component.html',
  styleUrl: './inbox.component.css'
})
export class InboxComponent {
  selectAll: boolean = false;
  @Output() emailClick = new EventEmitter<any>();

  emails = [
    {
      id: 1,
      sender: 'Google',
      subject: 'Your account security alert',
      preview: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In malesuada congue tellus eu vehicula. Quisque placerat semper porta. Interdum et malesuada fames ac ante ipsum primis in faucibus. ',
      date: 'Jul 8',
      starred: false,
      hasAttachment: true,
      selected: false
    },
    {
      id: 2,
      sender: 'Roland Ralte',
      subject: 'Internship Project Update',
      preview: 'Mauris vel tempor turpis, id facilisis arcu. Proin laoreet laoreet eros, quis vulputate tortor rhoncus non. Donec ut diam ligula. Aenean in urna dolor.',
      date: 'Jul 7',
      starred: true,
      hasAttachment: false,
      selected: false
    },
    {
      id: 3,
      sender: 'John Doe',
      subject: 'Meeting Reminder',
      preview: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.',
      date: 'Jul 6',
      starred: false,
      hasAttachment: false,
      selected: false
    },
    {
      id: 4,
      sender: 'Jane Smith',
      subject: 'Project Proposal',
      preview: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.',
      date: 'Jul 5',
      starred: true,
      hasAttachment: true,
      selected: false
    }
  ];

  toggleStar(email: any){
    email.starred = !email.starred;
  }

  toggleSelected(email: any){
    email.selected = !email.selected
  }

  toggleAllEmails() {
    this.selectAll = !this.selectAll;
    this.emails.forEach(email => {
      email.selected = this.selectAll;
    });
  }

  onEmailClick(email: any) {
    this.emailClick.emit(email);
  }

}
