import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {

  currentRoute: string = '';

  session : boolean = this.auth.isLoggedIn();
  isUserLoggedIn: boolean = false

  constructor(private auth: AuthService,private router: Router) {
    this.auth.isUserLoggedIn.subscribe( value => {
      this.isUserLoggedIn = value;
  });
  }

  getCurrentRoute(){
    this.currentRoute = this.router.url;
    console.log(this.currentRoute);
  }

  logout(){
    localStorage.removeItem('token');
    window.location.reload();
  }
  login(){
    this.router.navigate(['login'])
    this.auth.fromURL = this.router.url;
  }

  navigate(toPage:string, ){
    this.router.navigate([toPage]);
  }

}
