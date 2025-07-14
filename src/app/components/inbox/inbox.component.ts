import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-inbox',
  standalone: false,
  templateUrl: './inbox.component.html',
  styleUrl: './inbox.component.css'
})
export class InboxComponent {
  selectAll: boolean = false;
  searchText: string = '';

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
    },
    {
      id: 5,
      sender: 'GitHub',
      subject: 'Action Required: Confirm Your Email Address',
      preview: 'Hi there! Please confirm your email address to complete your GitHub account setup. Click the link below to verify. If you didn’t create a GitHub account, you can safely ignore this email.',
      date: 'Jul 11',
      starred: true,
      hasAttachment: false,
      selected: false
    },
    {
      id: 6,
      sender: 'Google',
      subject: 'Your account security alert',
      preview: 'We detected a new sign-in to your Google account from a device you haven’t used before. If this was you, you can safely ignore this message. Otherwise, we recommend reviewing your account activity and changing your password.',
      date: 'Jul 8',
      starred: false,
      hasAttachment: true,
      selected: false
    },
    {
      id: 7,
      sender: 'GitHub',
      subject: 'Action Required: Confirm Your Email Address',
      preview: 'Hi there! Please confirm your email address to complete your GitHub account setup. Click the button below to verify your email. If you didn’t create a GitHub account, you can safely ignore this email.',
      date: 'Jul 11',
      starred: true,
      hasAttachment: false,
      selected: false
    },
    {
      id: 7,
      sender: 'Figma',
      subject: 'You’ve been invited to collaborate',
      preview: 'You’ve been added to the “Style Vibes Mockups” project on Figma. Click the link below to open the file and start collaborating. Don’t forget to leave feedback before Friday’s review session.',
      date: 'Jul 10',
      starred: false,
      hasAttachment: false,
      selected: false
    },
    {
      id: 8,
      sender: 'LinkedIn',
      subject: 'Someone viewed your profile this week!',
      preview: 'You had 4 new profile views and 2 search appearances in the past 7 days. Find out who they are and how you can grow your network with personalized suggestions just for you.',
      date: 'Jul 13',
      starred: false,
      hasAttachment: true,
      selected: false
    },
    {
      id: 9,
      sender: 'Amazon',
      subject: 'Your order has shipped!',
      preview: 'Great news! Your order #421-5543728-1234567 has been shipped and is on its way. Track your package below to see the latest delivery status and estimated arrival date.',
      date: 'Jul 12',
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

  get filteredEmails() {
    return this.emails.filter(e =>
      e.subject.toLowerCase().includes(this.searchText.toLowerCase()) ||
      e.sender.toLowerCase().includes(this.searchText.toLowerCase()) ||
      e.preview.toLowerCase().includes(this.searchText.toLowerCase())
    );
  }

}
