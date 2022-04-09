import { Component } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { ProductsService } from 'src/app/Services/products.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {

  product: any;
  image : any;

  myForm: FormGroup = this.fb.group({
    Name: ['', [Validators.required]],
    Barcode: ['', [Validators.required]],
    Quantity: [0, [Validators.required]],
    UnitCost: [0, [Validators.required]],
    Price: [0, [Validators.required]],
    TaxPercentage: [0, [Validators.required]],
    PromotionAmount: [0, [Validators.required]],
    ImageUrl: ['', [Validators.required]],
    ImageData: ['', [Validators.required]],
    Status: ['', [Validators.required]],
    DeliveryTime: ['', [Validators.required]]
  })

  constructor(private productService: ProductsService, private fb: FormBuilder) { }

  getBase64(event :any){
    const file = event.target.files[0];
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      this.image = reader.result;
  }
   reader.onerror = function (error) {
     console.log('Error: ', error);
   };
  }

  addProduct(){
    this.myForm.value.ImageData = this.image;
    console.log(this.myForm.value);
    this.productService.postProduct(this.myForm.value).subscribe(
      (res) => console.log(res)
    );
  }

}