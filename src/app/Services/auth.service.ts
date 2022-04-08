import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { WebUser } from '../Interfaces/WebUser.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  fromURL : any = '';
  private apiURL = environment.requestURL;
  public isUserLoggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  private _key: string | null = '';
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
      this._key = this.user.id;
      this.isUserLoggedIn.next(true);
      this.isAuthenticated = true;
    }
  }

  isLoggedIn(){
    if (this.isAuthenticated == true) {
      return true
    }
    return false
  }

  postRegister(user:any){
    return this.http.post(`${this.apiURL}RegisterMarketingWebUser`,user)
  }

}
