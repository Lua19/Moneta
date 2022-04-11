import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/Interfaces/Product.interface';
import { ProductsService } from 'src/app/Services/products.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartItems: Product[] = []
  constructor(private products: ProductsService) {
    
   }

  ngOnInit(): void {
    this.cartItems = this.products.productsInCart
  }

  deleteItem(index : number){
    this.products.productsInCart.splice(index,1)
  }

}
