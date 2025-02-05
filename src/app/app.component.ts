import { Component, signal } from '@angular/core';
import {HeaderComponent} from './header/header.component';
import {UserInputComponent} from './user-input/user-input.component';
import {InvestmentResultsComponent} from './investment-results/investment-results.component';
import {InvestmentService} from './service/investment.service';
import {InvestmentData} from './model/investmentData';
import {AnnualData} from './model/annualData';

@Component({
  selector: 'app-root',
  imports: [
    HeaderComponent,
    UserInputComponent,
    InvestmentResultsComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  results = signal<AnnualData[]>([]);

  constructor(private investmentService: InvestmentService) {}

  onCalculate(investmentData:InvestmentData) {
    this.investmentService.calculateInvestment(investmentData);
  }
}
