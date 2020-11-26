import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { Card } from '../models/card.model';
import { User } from '../models/user.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  private user:User;
  private userLogin:BehaviorSubject<User>=new BehaviorSubject<User>(null)
  private isAdmin:BehaviorSubject<boolean>=new BehaviorSubject<boolean>(null)
  baseURL = 'http://localhost:3000';
  constructor(private http: HttpClient) {}

  getAllPhones() {
    return this.http.get(`${this.baseURL}/cards/all`);
  }

  createUser(body) {
      this.http.post(`${this.baseURL}/users/sign-up`, {...body}).subscribe(res=>{
        localStorage.setItem("token", res['token']);
        this.user=res as User 
        this.userLogin.next(this.user);
      });

  }
  login(body){
    return this.http.post(`${this.baseURL}/users/login`, body).pipe(
      map((use)=>{
        localStorage.setItem("token", use['token']);
        this.user=use as User 
        this.isAdmin.next(this.user.admin)
        this.userLogin.next(this.user);
        return use
      })
    )
  }


  userLoginReady(){
    return this.userLogin.asObservable()
  }
}
