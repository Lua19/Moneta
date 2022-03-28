import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private key: string | null = ''; 

  constructor() { }

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
