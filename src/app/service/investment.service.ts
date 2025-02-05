import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InvestmentService {
  private initialInvestment: number = 0;
  private duration: number = 0;
  private expectedReturn: number = 0;
  private annualInvestment: number = 0;

  calculateInvestmentResults() {
    const annualData = [];
    let investmentValue = this.initialInvestment;

    for (let i = 0; i < this.duration; i++) {
      const year = i + 1;
      const interestEarnedInYear = investmentValue * (this.expectedReturn / 100);

      investmentValue += interestEarnedInYear + this.annualInvestment;

      const totalInterest = investmentValue - this.annualInvestment * year - this.initialInvestment;

      annualData.push({
        year: year,
        interest: interestEarnedInYear,
        valueEndOfYear: investmentValue,
        annualInvestment: this.annualInvestment,
        totalInterest: totalInterest,
        totalAmountInvested: this.initialInvestment + this.annualInvestment * year,
      });
    }

    return annualData;
  }
}
