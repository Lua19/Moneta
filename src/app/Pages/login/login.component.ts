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

  myForm: FormGroup = this.fb.group({
    email: ['', [Validators.required,Validators.email]],
    password: ['', [Validators.required]],
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
    localStorage.setItem('token','wrxscf');
    this.auth.isUserLoggedIn.next(true)
    console.log(this.myForm.value);
    this.router.navigateByUrl(this.returnUrl);
    
  }

}
