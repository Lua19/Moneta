import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {

  session : boolean = this.auth.isLoggedIn();
  isUserLoggedIn: boolean = false

  constructor(private auth: AuthService,private router: Router) {
    this.auth.isUserLoggedIn.subscribe( value => {
      this.isUserLoggedIn = value;
  });
  }


  logout(){
    localStorage.removeItem('token');
    window.location.reload();
  }

  navigate(toPage:string, ){
    this.router.navigate([toPage]);
  }

}
