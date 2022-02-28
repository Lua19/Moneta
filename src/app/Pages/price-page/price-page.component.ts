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

  calculateFee(Fee : number){
    
    if (Fee>0) {
      
    }
  }

}
