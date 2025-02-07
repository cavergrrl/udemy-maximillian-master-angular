import { Component } from '@angular/core';
import {DashboardItemComponent} from '../dashboard-item/dashboard-item.component';
import {NewTicketComponent} from '../tickets/new-ticket/new-ticket.component';

@Component({
  selector: 'app-support-tickets',
  imports: [
    DashboardItemComponent,
    NewTicketComponent
  ],
  templateUrl: './support-tickets.component.html',
  styleUrl: './support-tickets.component.css'
})
export class SupportTicketsComponent {
  title = 'Support Tickets';
  image = { src: 'list.png', alt: 'A list of items' };
}
