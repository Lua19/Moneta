import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {

  product: any;
  image : any;

  constructor() { }

  getBase64(event :any){
    const file = event.target.files[0];
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      this.image = reader.result;
      console.log(this.image);
  }
   reader.onerror = function (error) {
     console.log('Error: ', error);
   };
  }

  addProduct(form: NgForm){
    form.value.imageData = this.image;
    console.log(form.value);
    this.product = form.value
  }

}