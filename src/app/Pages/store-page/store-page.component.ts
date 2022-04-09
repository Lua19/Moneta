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

  user:WebUser|any

  constructor(private router : Router, private products: ProductsService, private auth : AuthService) {
    this.auth.isUserLoggedIn.subscribe( value => {
      this.isUserLoggedIn = value;
    });
   }

  ngOnInit(): void {
    this.products.getProducts().subscribe(
      (res) => {
        console.log(res);
        
        this.productsList = res}
      );

    this.user = this.auth.user;
  }

  navigate(route: string){
    this.router.navigate(['/store/'+route]);
  }
  addToCart(index:number){
      localStorage.setItem(`Item ${index}`,this.productsList[index].name)
  }

}
