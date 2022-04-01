import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Contact } from 'src/app/Interfaces/contact';
import { ContactServiceService } from 'src/app/Services/contact-service.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  myForm: FormGroup = this.fb.group({
    name: ['', [Validators.required]],
    email: ['', [Validators.email]],
    phone: ['',[Validators.required]],
    comments: ['']
  })


  constructor(private contactService: ContactServiceService, private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  sendContact(){
    this.contactService.postContact(this.myForm.value).subscribe(
      (res) => console.log(res)
    );
  }
}
