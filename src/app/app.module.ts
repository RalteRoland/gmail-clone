import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { InboxComponent } from './components/inbox/inbox.component';
import { RightSidebarComponent } from './components/right-sidebar/right-sidebar.component';
import { SidebarExpandedComponent } from './sidebar-expanded/sidebar-expanded.component';
import { EmailDetailComponent } from './components/email-detail/email-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    InboxComponent,
    RightSidebarComponent,
    SidebarExpandedComponent,
    EmailDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
