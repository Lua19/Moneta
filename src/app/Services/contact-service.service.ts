import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContactServiceService {
  apiURL : string = '';
  constructor(private http: HttpClient) {}

  postContact(form: FormData){
    return this.http.post<FormData>(this.apiURL, form)
  }

}
