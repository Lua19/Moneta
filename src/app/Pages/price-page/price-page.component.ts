import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-price-page',
  templateUrl: './price-page.component.html',
  styleUrls: ['./price-page.component.css']
})
export class PricePageComponent implements OnInit {
  monthlyFee : number = 0;
  totalFee : number = 0;
  creditFee : number = 0;

  machines : number[] = [0];
  singleFee : number[] = [0];
  sales : any[];

  constructor() {
    this.sales = [null];
   }

  ngOnInit(): void {
    this.machines = [0];
    this.singleFee = [0];


  }

  addMachine(){
    this.machines.push(0)

    this.sales.push(0)
    this.singleFee.push(0)
  }
  removeMachine(i : number){
    this.machines.splice(i,1);

    this.sales.splice(i,1);
    this.singleFee.splice(i,1);
    this.calcFee();
  }

  /* THIS HELPS CALCULATE CREDIT CARD TAXES
  cardFee(){
    this.creditFee = 0;
    for (let index = 0; index < this.machines.length; index++) {
      this.creditFee += this.sales[index];
    }
    this.creditFee = this.creditFee * 0.051;
    return this.creditFee;
  }
  */

  calcFee(){
    this.monthlyFee = 0;
    this.totalFee = 0;


    for (let index = 0; index < this.machines.length; index++) {
      this.totalFee += this.sales[index];

      if (this.totalFee > 0 && this.totalFee <= 2999) {
        this.monthlyFee = this.monthlyFee + 50;
        this.singleFee[index] = 50;
      }
      if (this.totalFee >= 3000 && this.totalFee <= 4999) {
        this.monthlyFee = this.monthlyFee + 75;
        this.singleFee[index] = 75;        
      }
      if (this.totalFee >= 5000) {
        this.monthlyFee = this.monthlyFee + 100;
        this.singleFee[index] = 100;
      }
      this.totalFee = 0;
    }
  }
}
