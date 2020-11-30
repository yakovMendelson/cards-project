import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { User } from '../models/user.model';
import { map } from 'rxjs/operators';
import { GetDataService } from './get-data.service';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  public user: User;
  public admin: string ='client';
  private userLogin: BehaviorSubject<User> = new BehaviorSubject<User>(null)
  private isAdmin: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(null)
  baseURL = 'http://localhost:3000';
  constructor(private http: HttpClient) { }

  getAllPhones() {
    if(localStorage.getItem("admin")){
      this.admin=localStorage.getItem("admin");  
    }
    
    return this.http.get(`${this.baseURL}/cards/all`);
  }

  createUser(body) {
    return this.http.post(`${this.baseURL}/users/sign-up`, { ...body }).pipe(
      map(res => {
        localStorage.setItem("token", res['token']);
        this.user = res as User
        this.userLogin.next(this.user);
      }));

  }
  login(body) {
    return this.http.post(`${this.baseURL}/users/login`, body).pipe(
      map((use) => {
        localStorage.setItem("token", use['token']);
        this.user = use as User;
        if (this.user.admin){
          this.admin = 'admin'
          localStorage.setItem("admin", 'admin');
        }
        else
          this.admin = 'client';
          let user =JSON.stringify(use) 
          localStorage.setItem('user',user)
        this.isAdmin.next(this.user.admin)
        this.userLogin.next(this.user);
        return use
      })
    )
  }


  userLoginReady() {
    return this.userLogin.asObservable()
  }


  editCard(body, id) {
    let admin = this.admin;
    let token = localStorage.getItem('token')
    let headers = new HttpHeaders({ admin, token });
    this.http.patch(`${this.baseURL}/cards/edit/${id}`, { ...body }, { headers }).subscribe(card => console.log(card))
  }


  deleteCard(cardId) {
    let admin = this.admin;
    let token = localStorage.getItem('token')
    let headers = new HttpHeaders({ admin, token });
    return this.http.delete(`${this.baseURL}/cards/delete/${cardId}`, { headers });
  }


  createCard(body) {
    let admin = this.admin;
    let token = localStorage.getItem('token')
    let headers = new HttpHeaders({ admin, token });
    return this.http.post(`${this.baseURL}/cards/create`, body, { headers })
  }

  sendEmail(body) {
    return this.http.post(`${this.baseURL}/users/email`, body)
  }
}
