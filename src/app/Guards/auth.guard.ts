import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, Router, RouterStateSnapshot, UrlSegment } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../Services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanLoad {

  constructor(private auth : AuthService,private router: Router){}

  canActivate(route: ActivatedRouteSnapshot,state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if (this.auth.isLoggedIn() === true) {
      return true
    }
    if (this.auth.isLoggedIn() === false) {
      this.router.navigate(['/login'], { queryParams: { returnUrl: state.url }});
      console.log(state.url);
      return false
    }
    return false;
  }

  canLoad(route: Route,segments: UrlSegment[]): Observable<boolean> | Promise<boolean> | boolean  {
    if (this.auth.isLoggedIn() === true) {
      return true
    }
    if (this.auth.isLoggedIn() === false) {
     return false
    }
    return false;
  }

}
