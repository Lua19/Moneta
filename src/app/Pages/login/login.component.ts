import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  error : string | any;

  myForm: FormGroup = this.fb.group({
    Email: ['ivan@gmail.com', [Validators.required,Validators.email]],
    Password: ['1234', [Validators.required]],
  })

  returnUrl: string = '';
  constructor(private router: Router,
              private route: ActivatedRoute,
              private auth: AuthService,
              private fb: FormBuilder) { }

  ngOnInit(): void {
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

   login(){
    this.auth.postAuthenticate(this.myForm.value).subscribe(
      (resp) => {
        this.auth.login(resp);
        this.error = this.auth.login(resp)
        if (this.auth.isAuthenticated == true) {
          if (this.returnUrl == '/') {
            this.router.navigateByUrl(this.auth.fromURL);
          }
          else{
            this.router.navigate([this.returnUrl])
          }
        }
      })
  }

}
