import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/Interfaces/Product.interface';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartItems: Product[] = []
  constructor() {
    
   }

  ngOnInit(): void {
    for (let index = 0; index < localStorage.length; index++) {
      this.cartItems[index] = localStorage[index];
    }
  }

}
