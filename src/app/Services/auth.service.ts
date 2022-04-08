import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, catchError, map, Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { WebUser } from '../Interfaces/WebUser.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  fromURL : any = '';
  private apiURL = environment.requestURL;
  public isUserLoggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
   _key: string | null = localStorage.getItem('UserId');
  user:WebUser|any;
  isAuthenticated : boolean = false;

  constructor(private http: HttpClient, private router : Router) { }

    postAuthenticate(user:any){
    return this.http.post(`${this.apiURL}MarketingWebLogin`,user)
    }

    login(response : any){
    this.user = response
    if (this.user.id == "00000000-0000-0000-0000-000000000000") {
      this.isAuthenticated = false;
      return this.user.role;
    }
    else{
      localStorage.setItem('UserId',this.user.id)
      this.isUserLoggedIn.next(true);
      this.isAuthenticated = true;
    }
  }

  alreadyLoggedIn(): Observable<boolean>{
    return this.http.get<WebUser>(`${this.apiURL}MarketingWebRenewUser?Id=${this._key}`).pipe(
      map(
        resp => {
          if (resp.id == localStorage.getItem('UserId')) {
            this.isUserLoggedIn.next(true);
            this.isAuthenticated = true;
            this.user = resp;
            return true;
          }
          catchError(err => of(false));
          return false;
        }
      )
    );
  }

  isLoggedIn(){
    this._key = localStorage.getItem('UserId');
    if (this._key != null) {
      return true
    }
    return false
  }

  postRegister(user:any){
    return this.http.post(`${this.apiURL}RegisterMarketingWebUser`,user)
  }

  logout(){
    this._key = '';
    this.isUserLoggedIn.next(false);
    this.isAuthenticated = false;
  }

}
