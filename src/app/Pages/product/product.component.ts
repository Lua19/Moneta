import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductsService } from 'src/app/Services/products.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {

  product: any;
  image : any[] = [];
  imagesArray: any[] = [];
  errorResponse: boolean | any = undefined;

  myForm: FormGroup = this.fb.group({
    Name: ['', [Validators.required]],
    // Barcode: ['', [Validators.required]],
    // Quantity: [0, [Validators.required]],
    UnitCost: [0, [Validators.required]],
    Price: [0, [Validators.required]],
    TaxPercentage: [0, [Validators.required]],
    // PromotionAmount: [0, [Validators.required]],
    // ImageUrl: ['', [Validators.required]],
    // ImageData: ['', [Validators.required]],
    // Status: ['', [Validators.required]],
    Description: ['', [Validators.required]]
  })

  constructor(private productService: ProductsService, private fb: FormBuilder, private router: Router) { }

  getBase64(event :any){
    for (let index = 0; index < event.target.files.length; index++) {
      const files = event.target.files[index];
      let reader = new FileReader();
      reader.readAsDataURL(files);
      reader.onload = () => {
        this.image.push(reader.result);
      }
      reader.onerror = function (error) {
        console.log('Error: ', error);
      };
    }
  }

  addProduct(){
    let productModel = {StoreProduct : {}, StoreProductImageList: [{}]};
    for (let index = 0; index < this.image.length; index++) {
      this.imagesArray.push({ImageData :this.image[index]});
    }
    productModel.StoreProduct = this.myForm.value;
    productModel.StoreProductImageList = this.imagesArray;
    this.productService.postProduct(productModel).subscribe(
      (res) => {this.errorResponse = res; console.log(res);
      }
    );
  }
  navigate(route: string){
    this.router.navigateByUrl(route);
  }
  closeAlert(){
    this.errorResponse = undefined;
  }

}