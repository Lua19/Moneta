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

  salesPoints : {cashSales: number, cardSales: number, userSales:number}[]
   = [{cashSales : 0, cardSales : 0, userSales : 0}];

  constructor() { }

  ngOnInit(): void {
  }

  addMachine(){
    this.salesPoints.push(
      {cashSales : 0, cardSales : 0, userSales : 0}
    )
  }
  removeMachine(i : number){
    this.salesPoints.splice(i,1);
  }

  cardFee(cardSales:number){
    cardSales = cardSales * 0.051;
    return cardSales;
  }

  calcFee(myform: NgForm){
    this.monthlyFee = 0;
    this.totalFee = 0;
     
    this.totalFee = myform.value.cardSales + myform.value.cashSales + myform.value.userSales

    if (this.totalFee > 300 && this.totalFee <= 3000) {
      this.monthlyFee = this.monthlyFee + 50; 
    }
    if (this.totalFee > 3000 && this.totalFee <= 5000) {
      this.monthlyFee = this.monthlyFee + 75;        
    }
    if (this.totalFee > 5000) {
      this.monthlyFee = this.monthlyFee + 100;        
    }
    
    this.creditFee = this.cardFee(myform.value.cardSales);
    this.monthlyFee = this.monthlyFee + this.creditFee;
  }

}
