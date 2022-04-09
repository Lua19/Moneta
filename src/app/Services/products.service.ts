import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Product } from '../Interfaces/Product.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) { }

  private url = environment.requestURL;

  getProducts() : Observable<Product[]>{
    return this.http.get<Product[]>(`${this.url}GetStoreProductList`)
  }

  postProduct(body: any){
    return this.http.post(`${this.url}MarketingWebAddProduct`,body)
  }
  
  addCartItems(product:Product){

  }

}
