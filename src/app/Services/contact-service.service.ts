import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ContactServiceService {
  private apiURL = environment.requestURL;

  constructor(private http: HttpClient) {}

  postContact(body:any){
    return this.http.post(`${this.apiURL}`,body)
  }
}
