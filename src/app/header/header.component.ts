import { Component } from '@angular/core';
import {ConfigService} from "../service/config.service";
import {ButtonComponent} from "../shared/button/button.component";

@Component({
  selector: 'app-header',
    imports: [
        ButtonComponent
    ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  constructor(private configService: ConfigService) {}

  get title() {
    return this.configService.get('appTitle');
  }
}
