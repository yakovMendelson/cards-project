import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  
  constructor(private build : FormBuilder, private setData:HttpService) { }
  formGrop= this.build.group({
    name:[],
    email:[],
    message:[]
  })
  ngOnInit(): void {
  }
  send(){
    
    let grop =this.formGrop.controls;
    let body = {email:grop.email.value,subject:grop.name.value,text:grop.message.value};
    this.setData.sendEmail(body).subscribe()
  }

}
