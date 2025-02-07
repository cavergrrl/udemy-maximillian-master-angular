import {Component} from '@angular/core';
import {DashboardItemComponent} from '../dashboard-item/dashboard-item.component';

@Component({
  selector: 'app-server-status',
  imports: [
    DashboardItemComponent
  ],
  templateUrl: './server-status.component.html',
  styleUrl: './server-status.component.css'
})
export class ServerStatusComponent {
  title = 'Server Status';
  image = { src: 'status.png', alt: 'Server' };
  currentStatus = 'online';
}
