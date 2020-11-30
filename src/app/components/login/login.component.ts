import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';

import { Router } from '@angular/router';
import { HttpService } from 'src/app/services/http.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
err:string;
  myGrop: FormGroup = new FormGroup({
    email: new FormControl('yakov.m1994@gmail.com', [Validators.email, Validators.required]),
    password: new FormControl('313122673', [Validators.maxLength(16), Validators.minLength(8), Validators.required])
  });


  constructor(private dataHttpSER:HttpService, private router:Router) {



  }

  ngOnInit(): void {
   
  }

  login() {
    // console.log(this.myGrop.controls.email.value,this.myGrop.controls.password.value);
    
   
      let grop =this.myGrop.controls;
      let body={email: grop.email.value,password: grop.password.value};
      this.dataHttpSER.login(body).subscribe(()=>{console.log('yes');
    this.router.navigate(['/'])
    },
    (err)=>{this.err=err.error.message;
    console.log(err);
    }
      
      );
      
    
  }
  

}
