import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  user;
  baseURL = 'http://localhost:3000';
  constructor(private http: HttpClient) { }

  getAllPhones() {
    return this.http.get(`${this.baseURL}/cards/all`);
  }

  createUser(body) {
      this.http.post(`${this.baseURL}/users/sign-up`, {...body}).subscribe(res=>{
        localStorage.setItem("token", res['token']);
        this.user=res
      });

  }
  authUser(body){
    return this.http.post(`${this.baseURL}/users/login`, body);
  }
}
