import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Contact } from '../Interfaces/contact';
import { WebUser } from '../Interfaces/WebUser.interface';

@Injectable({
  providedIn: 'root'
})
export class ContactServiceService {
  private apiURL = environment.requestURL;

  constructor(private http: HttpClient) {}

  postContact(body:any){
    return this.http.post(`${this.apiURL}MarketingWebAddContactInformation`,body)
  }
  getAllContacts(): Observable<Contact[]>{
    return this.http.get<Contact[]>(`${this.apiURL}GetContactInformationList`)
  }
  getAllUsers(): Observable<WebUser[]>{
    return this.http.get<WebUser[]>(`${this.apiURL}GetMarketingWebUserList`)
  }

}
