import {Component, Input} from '@angular/core';
import {AnnualData} from '../model/annualData';
import {CurrencyPipe} from '@angular/common';

@Component({
  selector: 'app-investment-results',
  imports: [
    CurrencyPipe
  ],
  templateUrl: './investment-results.component.html',
  styleUrl: './investment-results.component.css'
})
export class InvestmentResultsComponent {
  @Input() results?: AnnualData[];

}
