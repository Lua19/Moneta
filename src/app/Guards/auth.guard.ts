import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, Router, RouterStateSnapshot, UrlSegment } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../Services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanLoad {

  constructor(private auth : AuthService,private router: Router){

  }

  canActivate(route: ActivatedRouteSnapshot,state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    console.log("It seems to work - CanActivate");
    if (this.auth.isLoggedIn() === true) {
      console.log('Access granted');
      return true
    }
    if (this.auth.isLoggedIn() === false) {
      console.log('Access denied');
      this.router.navigate(['/login'])
      return false
    }
    return false;
  }

  canLoad(route: Route,segments: UrlSegment[]): Observable<boolean> | Promise<boolean> | boolean  {
    console.log("It seems to work - Can Load");
    if (this.auth.isLoggedIn() === true) {
      console.log('Access granted');
      return true
    }
    if (this.auth.isLoggedIn() === false) {
      console.log('Access denied');
      
      return false
    }
    return false;
  }

}
