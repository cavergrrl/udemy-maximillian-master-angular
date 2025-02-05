import {Component, computed} from '@angular/core';
import {CurrencyPipe} from '@angular/common';
import {InvestmentService} from '../service/investment.service';

@Component({
  selector: 'app-investment-results',
  imports: [
    CurrencyPipe
  ],
  templateUrl: './investment-results.component.html',
  styleUrl: './investment-results.component.css'
})
export class InvestmentResultsComponent {
  results = computed(() => this.investmentService.annualData());

  constructor(private investmentService: InvestmentService) {}

}
