import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/Interfaces/Order.interface';
import { WebUser } from 'src/app/Interfaces/WebUser.interface';
import { AuthService } from 'src/app/Services/auth.service';
import { ProductsService } from 'src/app/Services/products.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
  Order : Order | any;
  user : WebUser|any;
  constructor(private auth: AuthService, private products: ProductsService) { }

  ngOnInit(): void {
    this.user = this.auth.user;
    this.getProductsForOrder();
  }

  getProductsForOrder(){
    
  }

}
