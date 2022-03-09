import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Contact } from '../Interfaces/contact';

@Injectable({
  providedIn: 'root'
})
export class ContactServiceService {
  private apiURL : string = '';
  constructor(private http: HttpClient) {}

  postContact(contact: Contact): Observable<Contact>{
    console.log("Submited "+contact)
    return this.http.post<Contact>(this.apiURL, contact)
  }
}
