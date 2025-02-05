import {Component, Input} from '@angular/core';
import {AnnualData} from '../model/annualData';

@Component({
  selector: 'app-investment-results',
  imports: [],
  templateUrl: './investment-results.component.html',
  styleUrl: './investment-results.component.css'
})
export class InvestmentResultsComponent {
  @Input() results?: AnnualData[];

}
