import { Injectable } from '@angular/core';
import {AnnualData} from '../model/annualData';
import {InvestmentData} from '../model/investmentData';

@Injectable({
  providedIn: 'root'
})
export class InvestmentService {
  private investmentData?: InvestmentData;

  calculateInvestment(investmentData: InvestmentData) {
    this.investmentData = investmentData;
    console.log(investmentData);

    const annualData = [];
    let investmentValue = this.investmentData.initialInvestment;

    for (let i = 0; i < this.investmentData.duration; i++) {
      const year = i + 1;
      const interestEarnedInYear = investmentValue * (this.investmentData.expectedReturn / 100);

      investmentValue += interestEarnedInYear + this.investmentData.annualInvestment;

      const totalInterest = investmentValue - this.investmentData.annualInvestment * year - this.investmentData.initialInvestment;

      let data:AnnualData = {
        year: year,
        interest: interestEarnedInYear,
        valueEndOfYear: investmentValue,
        annualInvestment: this.investmentData.annualInvestment,
        totalInterest: totalInterest,
        totalAmountInvested: this.investmentData.initialInvestment + this.investmentData.annualInvestment * year,
      }

      annualData.push({...data});
    }

    //print the annualData values
    console.log(annualData);
    return annualData;
  }
}
