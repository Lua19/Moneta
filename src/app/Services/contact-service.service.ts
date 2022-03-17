import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContactServiceService {

  constructor(private http: HttpClient) {}

  postContact(body:any){
    return this.http.post('http://localhost:3000/email',body)
  }
}