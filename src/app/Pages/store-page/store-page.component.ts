import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/Interfaces/Product.interface';
import { WebUser } from 'src/app/Interfaces/WebUser.interface';
import { AuthService } from 'src/app/Services/auth.service';
import { ProductsService } from 'src/app/Services/products.service';

@Component({
  selector: 'app-store-page',
  templateUrl: './store-page.component.html',
  styleUrls: ['./store-page.component.css']
})
export class StorePageComponent implements OnInit {

  productsList: Product[] = [];
  cartItems: Product[] = [];
  isUserLoggedIn: boolean = false;
  itemsInCart: boolean = false;
  user:WebUser|any;
  loading : boolean = true;
  productsFromStorage: string | null = '';
  zero : number = 0;

  constructor(private router : Router, private products: ProductsService, private auth : AuthService) {
    this.auth.isUserLoggedIn.subscribe( value => {
      this.isUserLoggedIn = value;
    });
    this.products.areItemsInCart.subscribe( value => {
      this.itemsInCart = value
    }
    )
   }

  ngOnInit(): void {
    this.products.getProducts().subscribe(
      (res) => {
        this.productsList = res;
        this.loading = false}
      );
    let previousItems = JSON.parse(localStorage.getItem("Products")!)
    if (previousItems != null) {
      this.products.productsInCart = previousItems
      this.cartItems = this.products.productsInCart;
      this.products.areItemsInCart.next(true);
    }
    if (this.products.productsInCart.length > 0) {
      this.cartItems = this.products.productsInCart;
      this.products.areItemsInCart.next(true);
    }
    this.user = this.auth.user;
  }

  navigate(route: string){
    this.router.navigate(['/store/'+route]);
  }
  addToCart(index:number){
    this.products.productsInCart.push(this.productsList[index]);
    localStorage.setItem("Products",JSON.stringify(this.products.productsInCart))
    this.cartItems = this.products.productsInCart;
    this.products.areItemsInCart.next(true);
  }

}
