import {Injectable, signal} from '@angular/core';
import {AnnualData} from '../model/annualData';
import {InvestmentData} from '../model/investmentData';

@Injectable({
  providedIn: 'root'
})
export class InvestmentService {
  annualData = signal<AnnualData[] | undefined>(undefined);

  calculateInvestment(investmentData: InvestmentData) {
    console.log(investmentData);

    const annualData = [];
    let investmentValue = investmentData.initialInvestment;

    for (let i = 0; i < investmentData.duration; i++) {
      const year = i + 1;
      const interestEarnedInYear = investmentValue * (investmentData.expectedReturn / 100);

      investmentValue += interestEarnedInYear + investmentData.annualInvestment;

      const totalInterest = investmentValue - investmentData.annualInvestment * year - investmentData.initialInvestment;

      let data:AnnualData = {
        year: year,
        interest: interestEarnedInYear,
        valueEndOfYear: investmentValue,
        annualInvestment: investmentData.annualInvestment,
        totalInterest: totalInterest,
        totalAmountInvested: investmentData.initialInvestment + investmentData.annualInvestment * year,
      }

      annualData.push({...data});
    }

    console.log(annualData);
    this.annualData.set(annualData);
  }
}
