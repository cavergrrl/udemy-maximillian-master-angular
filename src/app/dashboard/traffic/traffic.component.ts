import { Component } from '@angular/core';
import {DashboardItemComponent} from '../dashboard-item/dashboard-item.component';
import {TrafficService} from '../../service/traffic.service';

@Component({
  selector: 'app-traffic',
  imports: [
    DashboardItemComponent
  ],
  templateUrl: './traffic.component.html',
  styleUrl: './traffic.component.css'
})
export class TrafficComponent {
  title: string = 'Traffic';
  image: {src: string, alt: string} = { src: 'globe.png', alt: 'A globe' };
  maxTraffic: number = 1;

  constructor(private trafficService: TrafficService) {}

  ngOnInit() {
    this.maxTraffic = this.trafficService.calculateMaxTraffic();
  }

  get trafficData() {
    return this.trafficService.getTrafficData();
  }
}
