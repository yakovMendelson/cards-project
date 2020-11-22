import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';

import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 users;
  myGrop: FormGroup = new FormGroup({
    email: new FormControl('yakov.m1994@gmail.com', [Validators.email, Validators.required]),
    password: new FormControl('313122673', [Validators.maxLength(16), Validators.minLength(8), Validators.required])
  });


  constructor() {



  }

  ngOnInit(): void {
   
  }

  login() {
    console.log(this.myGrop.controls.email.value,this.myGrop.controls.password.value);
    
    // this.UserPasswordSER.login(this.formGrop.controls.email.value,this.formGrop.controls.password.value)

  }

}
