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

  machines : number[] = [0];
  cardSales : number[] = [0];

  constructor() { }

  ngOnInit(): void {
    this.machines = [0];

    this.cardSales = [0];
  }

  addMachine(){
    this.machines.push(0)

    this.cardSales.push(0)
  }
  removeMachine(i : number){
    this.machines.splice(i,1);

    this.cardSales.splice(i,1);
  }

  /*
  cardFee(){
    this.creditFee = 0;
    for (let index = 0; index < this.machines.length; index++) {
      this.creditFee += this.cardSales[index];
    }
    this.creditFee = this.creditFee * 0.051;
    return this.creditFee;
  }
  */

  calcFee(myform: NgForm){
    this.monthlyFee = 0;
    this.totalFee = 0;


    for (let index = 0; index < this.machines.length; index++) {
      this.totalFee += this.cardSales[index];

      if (this.totalFee > 0 && this.totalFee <= 2999) {
        this.monthlyFee = this.monthlyFee + 50; 
      }
      if (this.totalFee >= 3000 && this.totalFee <= 4999) {
        this.monthlyFee = this.monthlyFee + 75;        
      }
      if (this.totalFee >= 5000) {
        this.monthlyFee = this.monthlyFee + 100;        
      }
      this.totalFee = 0;
    }
    
    console.log(this.monthlyFee);
  }
}
