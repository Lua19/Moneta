import { Component, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-price-page',
  templateUrl: './price-page.component.html',
  styleUrls: ['./price-page.component.css']
})
export class PricePageComponent implements OnInit {
  monthlyFee : number = 0;
  salesPoints : {cashSales: number, cardSales: number, userSales:number}[] = [
    {cashSales : 0, cardSales : 0, userSales : 0}
  ];

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
  }

  calcFee(myform: NgForm){
    console.log(myform.value)
  }

}
