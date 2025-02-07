import { Component } from '@angular/core';
import { ConfigService } from './service/config.service';
import {TrafficService} from './service/traffic.service';
import {HeaderComponent} from './header/header.component';

@Component({
  selector: 'app-root',
  imports: [
    HeaderComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  currentStatus = 'online';
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
