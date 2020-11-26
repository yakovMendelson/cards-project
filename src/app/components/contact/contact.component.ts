import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  
  constructor(private build : FormBuilder) { }
  formGrop= this.build.group({
    name:[],
    email:[],
    message:[]
  })
  ngOnInit(): void {
  }
  send(){
    console.log(this.formGrop);
    
  }

}
