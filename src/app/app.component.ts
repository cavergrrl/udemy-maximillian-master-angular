import { Component } from '@angular/core';
import { ConfigService } from './service/config.service';
import {TrafficService} from './service/traffic.service';
import {HeaderComponent} from './header/header.component';
import {ServerStatusComponent} from './dashboard/server-status/server-status.component';

@Component({
  selector: 'app-root',
  imports: [
    HeaderComponent,
    ServerStatusComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  maxTraffic: number = 1;

  constructor(private configService: ConfigService,
              private trafficService: TrafficService
  ) {}

  ngOnInit() {
    this.maxTraffic = this.trafficService.calculateMaxTraffic();
  }

  get trafficData() {
    return this.trafficService.getTrafficData();
  }
}
