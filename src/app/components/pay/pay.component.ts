import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-pay',
  templateUrl: './pay.component.html',
  styleUrls: ['./pay.component.css']
})
export class PayComponent implements OnInit {

  constructor(private build : FormBuilder) { }
  formGrop= this.build.group({
    name:[],
    email:[],
    message:[]
  })
  ngOnInit(): void {
  }

}
