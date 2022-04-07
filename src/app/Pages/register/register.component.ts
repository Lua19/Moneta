import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  error: string|any;

  myForm: FormGroup = this.fb.group({
    FirstName: ['', [Validators.required,Validators.minLength(3)]],
    LastName: ['', [Validators.required,Validators.minLength(3)]],
    Email: ['', [Validators.required,Validators.email]],
    Password: ['', [Validators.required]],
    Role: ['User'],
    Status: [''],
  })

  constructor(private fb : FormBuilder, private auth : AuthService,private router:Router) { }

  ngOnInit(): void {
  }

  register(){
    this.auth.postRegister(this.myForm.value).subscribe(
      (res) => {console.log(res)},
      (error) => {this.error = error},
      () => {this.router.navigate(['login'])}
    )
  }
}
