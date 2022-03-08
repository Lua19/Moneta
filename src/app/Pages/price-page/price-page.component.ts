import { Component, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-price-page',
  templateUrl: './price-page.component.html',
  styleUrls: ['./price-page.component.css']
})
export class PricePageComponent implements OnInit {
  monthlyFee : number = 0;
  totalFee : number = 0;
  creditFee : number = 0;
  perMachine : number = 0;

  machines : number[] = [0];
  cardSales : number[] = [0];
  cashSales : number[] = [0];
  userSales : number[] = [0];

  constructor() { }

  ngOnInit(): void {
    this.machines = [0];

    this.cardSales = [0];
    this.cashSales = [0];
    this.userSales = [0];
  }

  addMachine(){
    this.machines.push(0)

    this.cardSales.push(0)
    this.cashSales.push(0)
    this.userSales.push(0)
  }
  removeMachine(i : number){
    this.machines.splice(i,1);

    this.cardSales.splice(i,1);
    this.cashSales.splice(i,1);
    this.userSales.splice(i,1);
  }

  cardFee(){
    this.creditFee = 0;
    for (let index = 0; index < this.machines.length; index++) {
      this.creditFee += this.cardSales[index];
    }
    this.creditFee = this.creditFee * 0.051;
    return this.creditFee;
  }

  calcFee(myform: NgForm){
    this.monthlyFee = 0;
    this.totalFee = 0;


    for (let index = 0; index < this.machines.length; index++) {
      this.totalFee += this.cardSales[index];
      this.totalFee += this.cashSales[index];
      this.totalFee += this.userSales[index];

      if (this.totalFee > 300 && this.totalFee <= 3000) {
        this.monthlyFee = this.monthlyFee + 50; 
      }
      if (this.totalFee > 3000 && this.totalFee <= 5000) {
        this.monthlyFee = this.monthlyFee + 75;        
      }
      if (this.totalFee > 5000) {
        this.monthlyFee = this.monthlyFee + 100;        
      }
      this.perMachine += this.totalFee;
      this.totalFee = 0;
    }
    
    console.log(this.monthlyFee)

    this.monthlyFee = this.monthlyFee + this.cardFee();
  }
}
