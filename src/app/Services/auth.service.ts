import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private key = localStorage.getItem('token');

  constructor() { }

  isLoggedIn(){
    if (this.key) {
      return true
    }
    return false
  }
}
