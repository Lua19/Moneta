import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/Interfaces/Product.interface';
import { WebUser } from 'src/app/Interfaces/WebUser.interface';
import { AuthService } from 'src/app/Services/auth.service';
import { ProductsService } from 'src/app/Services/products.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  user : WebUser | any;
  items : Product[] = []
  total: number = 0;
  isUserLoggedIn: boolean = false

  constructor(private auth: AuthService, private products: ProductsService) { }

  ngOnInit(): void {
    this.items = this.products.productsInCart;
    this.auth.isUserLoggedIn.subscribe( value => {
      this.isUserLoggedIn = value;});
    this.user = this.auth.user
    this.total = this.calcTotal();
  }

  calcTotal(){
    for (let index = 0; index < this.items.length; index++) {
       this.total = this.total + this.items[index].price;
      }
      return this.total
  }
  pay(payment : number){
    this.products.postPayment(payment).subscribe(
      (res) => {
        console.log(res)
      }
    )
  }

}
