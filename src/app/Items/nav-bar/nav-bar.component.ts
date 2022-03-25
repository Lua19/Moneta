import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {

  session : boolean = this.auth.isLoggedIn();;

  constructor(private auth: AuthService,private router: Router) {

  }


  logout(){
    localStorage.removeItem('token');
    window.location.reload();
  }

  navigate(topage:string, ){
    this.router.navigate([topage]);
  }

}
