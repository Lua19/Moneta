import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Order } from 'src/app/Interfaces/Order.interface';
import { Product } from 'src/app/Interfaces/Product.interface';
import { WebUser } from 'src/app/Interfaces/WebUser.interface';
import { AuthService } from 'src/app/Services/auth.service';
import { ProductsService } from 'src/app/Services/products.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
  Order : any;
  user : WebUser|any;
  productsList : Product[] = []

  // myUrl= new URL('https://www.monetamarket.com/orders?BillingAddress=1246 E WOOD AVE&BillingCity=Salt Lake city&billingfirstname=luis&billinglastname=ruiz&billingstate=utah&billingzip=84105&amount=0.30&cardexpirationdate=0624&cardtype=48**********6705&lasttransactiontype=sale&maskedcardnumber=48**********6705&phone=4322143128&email=luisruiz.latic@gmail.com');

  // obj = new URLSearchParams(this.myUrl.search)

  constructor(private auth: AuthService, private products: ProductsService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.user = this.auth.user;
    localStorage.removeItem("Products")
    this.getProductsForOrder();
    // this.getOrder();
    this.route.queryParams.subscribe(
      params => {
        this.Order = params
      }
    )
  }

  // getOrder(){
  //   this.Order = JSON.parse(sessionStorage.getItem("Order")!)
  //   // console.log(this.Order);
    
  // }

  getProductsForOrder(){
    this.productsList = JSON.parse(sessionStorage.getItem("Products")!)
    // console.log(this.productsList)
  }

}
