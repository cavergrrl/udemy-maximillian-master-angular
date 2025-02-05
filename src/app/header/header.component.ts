import {Component} from '@angular/core';
import {ConfigService} from "../service/config.service";

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  constructor(private configService: ConfigService) {}

  get title() {
    return this.configService.get('appTitle');
  }
}
