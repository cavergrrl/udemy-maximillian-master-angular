import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {InvestmentService} from '../service/investment.service';
import {InvestmentData} from '../model/investmentData';
import {AnnualData} from '../model/annualData';

@Component({
  selector: 'app-user-input',
  imports: [
    FormsModule
  ],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {
  initialInvestment: number = 0;
  annualInvestment: number = 0;
  expectedReturn: number = 0;
  duration: number = 0;
  forecastedValue: AnnualData[] = [];

  constructor(private investmentService: InvestmentService) {}

  onSubmit() {
    let investmentData: InvestmentData = {
      initialInvestment: this.initialInvestment,
      annualInvestment: this.annualInvestment,
      expectedReturn: this.expectedReturn,
      duration: this.duration
    }

    this.forecastedValue = this.investmentService.calculateInvestment(investmentData);
  }
}
