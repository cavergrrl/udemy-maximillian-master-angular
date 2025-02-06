import {Injectable} from '@angular/core';
import {TRAFFIC_DATA} from '../../mock/trafficData';

@Injectable({
  providedIn: 'root'
})
export class TrafficService {

  calculateMaxTraffic(): number {
    return Math.max(...this.getTrafficData().map((data) => data.value));
  }

  getTrafficData() {
    return TRAFFIC_DATA
  }
}
