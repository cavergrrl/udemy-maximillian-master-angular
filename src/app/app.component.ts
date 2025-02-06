import { Component } from '@angular/core';
import { ConfigService } from './service/config.service';
import {TrafficService} from './service/traffic.service';

@Component({
  selector: 'app-root',
  imports: [],
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

  get title() {
    return this.configService.get('appTitle');
  }

  get trafficData() {
    return this.trafficService.getTrafficData();
  }
}
