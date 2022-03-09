import { Component, OnInit } from '@angular/core';
import { Contact } from 'src/app/Interfaces/contact';
import { ContactServiceService } from 'src/app/Services/contact-service.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  private apiURL: string = '';

  NewContact: Contact = {
    name: '',
    email: '',
    phone: '',
    comments: ''
  };

  constructor(private contactService: ContactServiceService) { }

  ngOnInit(): void {
  }

  sendContact(ContactForm : any){
    this.NewContact = ContactForm.form.value;
    this.contactService.postContact(this.NewContact).subscribe(contact =>{
      console.log(contact);
    })
  }

}
