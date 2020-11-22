import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  baseURL = 'http://localhost:3000';
  constructor(private http: HttpClient) { }

  getAllPhones() {
    return this.http.get(`${this.baseURL}/cards/all`);
  }

  createUser(body) {
    this.http.post(`${this.baseURL}/users/create`, body).subscribe(token=>console.log(token));
    
  }
}
