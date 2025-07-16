import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Components
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { InboxComponent } from './components/inbox/inbox.component';
import { RightSidebarComponent } from './components/right-sidebar/right-sidebar.component';
import { SidebarExpandedComponent } from './components/sidebar-expanded/sidebar-expanded.component';
import { EmailDetailComponent } from './components/email-detail/email-detail.component';


// Third-party
import { NgSelectModule } from '@ng-select/ng-select';
import { ComposeComponent } from './components/compose/compose.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    InboxComponent,
    RightSidebarComponent,
    SidebarExpandedComponent,
    EmailDetailComponent,
    ComposeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CommonModule,
    NgSelectModule,
    ReactiveFormsModule,
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
