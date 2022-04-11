import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../Services/auth.service';
import { ProductsService } from '../Services/products.service';

@Injectable({
  providedIn: 'root'
})

export class PaymentGuard implements CanActivate {

  constructor(private auth: AuthService, private products : ProductsService){}



  canActivate(route: ActivatedRouteSnapshot,state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return true;
  }
  
}
