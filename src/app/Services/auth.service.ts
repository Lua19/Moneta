import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public isUserLoggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  private key: string | null = ''; 

  constructor(private http: HttpClient) { }

  authenticate(){
    

  }

  isLoggedIn(){
    this.key = localStorage.getItem('token');
    if (this.key) {
      return true
    }
    return false
  }

}
