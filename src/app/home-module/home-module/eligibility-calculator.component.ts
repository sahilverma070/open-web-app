import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'eligibility-calculator',
  templateUrl: './eligibility-calculator.component.html',
  styleUrls: ['./home-module.component.scss']
})
export class EligibilityCalculatorComponent implements OnInit {
  model: any = {
    monthlyIncome: 100000,
    monthlyExpense: 0,
    repaymentTenure: 6,
    existingLoans: false,
    emiOfExistingLoan: 0
  };
  sliderRange: any = {
    minSalaryRange: 100000,
    minExpenseRange: 0,
    maxExpenseRange: 100000,
    maxSalaryRange: 300000
  };
  totalLoanAmount = this.model.monthlyIncome - this.model.monthlyExpense;
  totalEmi =  Math.round(this.totalLoanAmount / this.model.repaymentTenure);
  repaymentTenure: Array<any> = [
    { name: '1 month', value: 1 },
    { name: '2 months', value: 2 },
    { name: '3 months', value: 3 },
    { name: '4 months', value: 4 },
    { name: '5 months', value: 5 },
    { name: '6 months', value: 6 },
    { name: '7 months', value: 7 },
    { name: '8 months', value: 8 },
    { name: '9 months', value: 9 },
    { name: '10 months', value: 10 },
    { name: '11 months', value: 11 },
    { name: '12 months', value: 12 }
  ];
  @ViewChild(NgForm, { static: false }) f: NgForm;
  constructor() { }

  ngOnInit(): void { }

  onSubmit() {
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.model))
  }
  changeEvent() {
    this.totalLoanAmount = this.model.monthlyIncome - this.model.monthlyExpense;
    this.totalEmi = Math.round(this.totalLoanAmount / this.model.repaymentTenure);
    console.log('this.totalEmi', this.totalEmi);
    console.log('this.totalLoanAmount', this.totalLoanAmount)
  }
}
