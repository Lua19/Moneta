import { Component, OnInit } from '@angular/core';
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
  constructor(private auth: AuthService, private products: ProductsService) { }

  ngOnInit(): void {
    this.user = this.auth.user;
    localStorage.removeItem("Products")
    this.getProductsForOrder();
    this.getOrder();
  }

  getOrder(){
    this.Order = JSON.parse(sessionStorage.getItem("Order")!)
    console.log(this.Order);
    
  }

  getProductsForOrder(){
    this.productsList = JSON.parse(sessionStorage.getItem("Products")!)
    console.log(this.productsList)
  }

}
