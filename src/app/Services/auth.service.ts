import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  fromURL : any = '';

  public isUserLoggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  private key: string | null = ''; 

  constructor(private http: HttpClient, private router : Router) { }

  authenticate(url: any){
    console.log("Sesion iniciada");
    this.router.navigate([url]);
  }

  isLoggedIn(){
    this.key = localStorage.getItem('token');
    if (this.key) {
      return true
    }
    return false
  }

}
