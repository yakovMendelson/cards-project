import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { Router } from '@angular/router';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {





  formGrop: FormGroup = new FormGroup({
    email: new FormControl('yakov.m1994@gmail.com', [Validators.email, Validators.required]),
    password: new FormControl('313122673', [Validators.maxLength(16), Validators.minLength(8), Validators.required]),
    firstname: new FormControl('yakov', [Validators.maxLength(16), Validators.required]),
    lastname: new FormControl('mendelson', [Validators.maxLength(16), Validators.required]),
    age: new FormControl(26, [ Validators.required])
  });


  constructor(private router: Router,private dataSER:HttpService) { }

  ngOnInit(): void {
  }

  signUp() {
    let grop =this.formGrop.controls;
    let body={email: grop.email.value,password: grop.password.value,firstname: grop.firstname.value,lastname: grop.lastname.value,age: grop.age.value};
    this.dataSER.createUser(body);
    this.router.navigate(['pay'])
  }
}


