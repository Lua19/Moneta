import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/Interfaces/Product.interface';
import { AuthService } from 'src/app/Services/auth.service';
import { ProductsService } from 'src/app/Services/products.service';

@Component({
  selector: 'app-cart-view',
  templateUrl: './cart-view.component.html',
  styleUrls: ['./cart-view.component.css']
})
export class CartViewComponent implements OnInit {
  productsList: Product[] = [];
  loading : boolean = true;
  constructor(private products:ProductsService, private auth:AuthService) {
    
   }

  ngOnInit(): void {
    this.productsList = this.products.productsInCart
  }

  

}
