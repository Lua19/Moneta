import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, Router, RouterStateSnapshot, UrlSegment } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../Services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private auth : AuthService,private router: Router){}

  canActivate(route: ActivatedRouteSnapshot,state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if (this.auth.isLoggedIn() == true) {
      console.log("CA1");
      console.log(this.auth._key,this.auth.isAuthenticated)
      return this.auth.alreadyLoggedIn();
    }
    if (this.auth.isLoggedIn() == false) {
      this.auth.isUserLoggedIn.next(false)
      
      return true
    }
    return false;
  }


}
