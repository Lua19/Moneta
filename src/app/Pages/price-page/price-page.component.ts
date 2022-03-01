import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-price-page',
  templateUrl: './price-page.component.html',
  styleUrls: ['./price-page.component.css']
})
export class PricePageComponent implements OnInit {
  Fee : number = 0;
  CreditCardFee = 0;
  Earnings : number[] = [];

  public machines : any [] =
  [
    {name: '',
     earnings: 0}
  ]

  constructor() { }

  ngOnInit(): void {
  }

  addMachine() {
    this.machines.push(
      {name: '',
      earnings: 0}
      );
    }
  removeMachine(i: number) {
    this.machines.splice(i, 1);
  }

  calcFee (){
    for (let index = 0; index < this.Earnings.length; index++) {
      if (this.Earnings[index] > 300 && this.Earnings[index] <= 3000) {
        this.Fee = this.Fee+50;
      }
      if (this.Earnings[index] > 3000 && this.Earnings[index] <= 5000) {
        this.Fee = this.Fee+75;
      }
      if (this.Earnings[index] > 5000) {
        this.Fee = this.Fee+100;
      }  
    }
  }
}
