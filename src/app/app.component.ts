import { Component } from '@angular/core';
import {HeaderComponent} from './header/header.component';
import {UserInputComponent} from './user-input/user-input.component';
import {InvestmentService} from './service/investment.service';
import {InvestmentData} from './model/investmentData';

@Component({
  selector: 'app-root',
  imports: [
    HeaderComponent,
    UserInputComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  constructor(private investmentService: InvestmentService) {}

  calculate(investmentData:InvestmentData) {
    this.investmentService.calculateInvestment(investmentData);
  }
}
