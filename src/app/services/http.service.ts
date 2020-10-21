import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Phone } from '../models/phone.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
baseURL = 'https://phone-store-ef33c.firebaseio.com/post.json' ;
  constructor(private http: HttpClient) { }

getAllPhones(){
  return this.http.get(this.baseURL) ;
}
postAllPhones(phones: Phone[]){
  this.http.post(this.baseURL, phones).subscribe() ;
}

}
