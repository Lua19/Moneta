import { HttpStatusCode } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
  isUserLoggedIn: boolean = false;
  paymentError : string | any;
  response : any;
  HttpError : HttpStatusCode | any;
  tax : number = 0;
  state: string = '';
  
  myForm: FormGroup = this.fb.group({
    ssl_company: ['', [Validators.required,Validators.minLength(3)]],
    ssl_phone: ['', [Validators.required,Validators.minLength(3)]],
    ssl_amount: [0,[Validators.required]],
    ssl_email: ['', [Validators.required,Validators.email]],
    ssl_avs_address: ['', [Validators.required]],
    ssl_state: ['', [Validators.required]],
    ssl_city: ['', [Validators.required]],
    ssl_first_name: ['', [Validators.required]],
    ssl_last_name: ['', [Validators.required]],
  })

  constructor(private auth: AuthService, private products: ProductsService, private fb : FormBuilder) { }

  ngOnInit(): void {
    this.items = this.products.productsInCart;
    this.auth.isUserLoggedIn.subscribe( value => {
      this.isUserLoggedIn = value;});
    this.user = this.auth.user
    this.total = this.calcTotal();
  }

  calcTotal(){
    for (let index = 0; index < this.items.length; index++) {
       this.total = this.total + this.items[index].price!;
      }
      return this.total
  }
  pay(){
    let amount = this.total.toString();
    
    this.myForm.value.ssl_amount = amount;
    if (this.user) {
      this.myForm.value.ssl_first_name = this.user.firstName;
      this.myForm.value.ssl_last_name = this.user.lastName;
      this.myForm.value.ssl_email = this.user.email;
    }
    this.storeItemsAsOrder();
    this.handleRedirect();
  }
  storeItemsAsOrder(){
    for (let index = 0; index < this.items.length; index++) {
      sessionStorage.setItem("Products",JSON.stringify(this.products.productsInCart))
    }
    sessionStorage.setItem("Order",JSON.stringify( this.myForm.value));
  }
  handleRedirect(){
    this.products.postPayment(this.myForm.value).subscribe(
      (res) => {
        console.log("This activated",res)
      
      },
      (error) => {
        this.HttpError = error;
        if (this.HttpError.status == 200) {
          this.response = error.error.text;
          window.open(this.response,"_blank")
        }
        else{
          this.paymentError = "There was a problem processing the payment"
          console.log(this.paymentError);
        }
      }
    )
  }
  applyTax(){
    console.log("Tax rule applied");
    if (this.myForm.value.ssl_state == 'Utah') {
      this.tax = this.total * 1.047 - this.total;
    }
    if (this.myForm.value.ssl_state != 'Utah') {
      this.tax = 0;
    }
  }

}
