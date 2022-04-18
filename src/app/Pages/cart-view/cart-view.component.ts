import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/Interfaces/Product.interface';
import { WebUser } from 'src/app/Interfaces/WebUser.interface';
import { AuthService } from 'src/app/Services/auth.service';
import { ProductsService } from 'src/app/Services/products.service';

@Component({
  selector: 'app-cart-view',
  templateUrl: './cart-view.component.html',
  styleUrls: ['./cart-view.component.css']
})
export class CartViewComponent implements OnInit {
  productsList: Product[] = [];
  user : WebUser | any;
  loading : boolean = true;
  total : number = 0;
  constructor(private products:ProductsService, private auth:AuthService) {
    
   }

  ngOnInit(): void {
    this.productsList = this.products.productsInCart;
    this.user = this.auth.user;
    this.total = this.calcTotal();
  }
  deleteItem(index : number){
    this.products.productsInCart.splice(index,1);
    this.total = this.calcTotal();
  }
  calcTotal(){
    this.total = 0;
    for (let index = 0; index < this.productsList.length; index++) {
       this.total = this.total + this.productsList[index].price;
      }
      return this.total
  }



}
