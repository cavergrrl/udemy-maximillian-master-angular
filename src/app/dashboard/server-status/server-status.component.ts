import {Component, OnInit} from '@angular/core';
import {DashboardItemComponent} from '../dashboard-item/dashboard-item.component';

@Component({
  selector: 'app-server-status',
  imports: [
    DashboardItemComponent
  ],
  templateUrl: './server-status.component.html',
  styleUrl: './server-status.component.css'
})
export class ServerStatusComponent implements OnInit{
  title = 'Server Status';
  image = { src: 'status.png', alt: 'Server' };
  currentStatus: 'online' | 'offline' | 'unknown' = 'offline';

  constructor() {}

  ngOnInit() {
    setInterval(() => {
      const random = Math.random();
      if (random < 0.5) {
        this.currentStatus = 'online';
      } else if (random < 0.9) {
        this.currentStatus = 'offline';
      } else {
        this.currentStatus = 'unknown';
      }
    }, 5000);
  }
}
