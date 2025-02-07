import { Component } from '@angular/core';
import {HeaderComponent} from './header/header.component';
import {ServerStatusComponent} from './dashboard/server-status/server-status.component';
import {TrafficComponent} from './dashboard/traffic/traffic.component';
import {SupportTicketsComponent} from './dashboard/support-tickets/support-tickets.component';

@Component({
  selector: 'app-root',
  imports: [
    HeaderComponent,
    ServerStatusComponent,
    TrafficComponent,
    SupportTicketsComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

}
