import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/Interfaces/Product.interface';
import { ProductsService } from 'src/app/Services/products.service';

@Component({
  selector: 'app-store-page',
  templateUrl: './store-page.component.html',
  styleUrls: ['./store-page.component.css']
})
export class StorePageComponent implements OnInit {

  productsList: Product[] = [];

  constructor(private router : Router, private products: ProductsService) { }

  ngOnInit(): void {
    this.products.getProducts().subscribe(
      (res) => this.productsList = res);
  }

  navigate(route: string){
    this.router.navigate(['/store/'+route]);
  }

}
