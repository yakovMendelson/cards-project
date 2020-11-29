import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { GetDataService } from 'src/app/services/get-data.service';
import { Card } from 'src/app/models/card.model';

@Component({
  selector: 'app-pay',
  templateUrl: './pay.component.html',
  styleUrls: ['./pay.component.css']
})
export class PayComponent implements OnInit {
cart:Card[]=[];
countPrice:number
  constructor(private build : FormBuilder, private data:GetDataService) { }
  formGrop= this.build.group({
    name:[],
    email:[],
    message:[]
  })
  ngOnInit(): void {
    this.data.chengeCart().subscribe(card=>{
      if(card){
        this.cart=card;
        this.countPrice=this.data.getSumPrice()
         
      }
    })
  }

}
