import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  myForm: FormGroup = this.fb.group({
    Name: ['', [Validators.required,Validators.minLength(3)]],
    Email: ['', [Validators.required,Validators.email]],
    Password: ['', [Validators.required]],
  })

  constructor(private fb : FormBuilder) { }

  ngOnInit(): void {
  }
  register(){

  }

}
