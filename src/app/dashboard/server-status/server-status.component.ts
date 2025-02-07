import {Component, OnDestroy, OnInit, signal} from '@angular/core';
import {DashboardItemComponent} from '../dashboard-item/dashboard-item.component';

@Component({
  selector: 'app-server-status',
  imports: [
    DashboardItemComponent
  ],
  templateUrl: './server-status.component.html',
  styleUrl: './server-status.component.css'
})
export class ServerStatusComponent implements OnInit, OnDestroy {
  title = 'Server Status';
  image = { src: 'status.png', alt: 'Server' };
  currentStatus = signal<'online' | 'offline' | 'unknown'>('offline');

  private interval?: ReturnType<typeof setInterval>;

  constructor() {}

  ngOnInit() {
    this.interval = setInterval(() => {
      const random = Math.random();
      if (random < 0.5) {
        this.currentStatus.set('online');
      } else if (random < 0.9) {
        this.currentStatus.set('offline');
      } else {
        this.currentStatus.set('unknown');
      }
    }, 5000);
  }

  ngOnDestroy(): void {
    clearTimeout(this.interval);
  }
}
