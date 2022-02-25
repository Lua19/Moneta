import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-price-page',
  templateUrl: './price-page.component.html',
  styleUrls: ['./price-page.component.css']
})
export class PricePageComponent implements OnInit {
  Fee : number = 0;
  CreditCardFee = 0;
  Money: number =0;
  constructor() { }

  ngOnInit(): void {
  }

}
