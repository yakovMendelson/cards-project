import { Component, OnInit } from '@angular/core';
import { GetDataService } from 'src/app/services/get-data.service';
import { Card } from 'src/app/models/card.model';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-shopping',
  templateUrl: './shopping.component.html',
  styleUrls: ['./shopping.component.css']
})
export class ShoppingComponent implements OnInit {
cart:Card[]=[]
login:boolean=false
  constructor(private getdata: GetDataService ,private setdata:HttpService) { }

  ngOnInit(): void {
    this.getdata.chengeCart().subscribe(card=>{
      if(card){
        this.cart=card
        if(this.setdata.user)
        this.login=true
      }
    })
    
  }

  deleteFromCart(id){
 if(confirm('אתה בטוח שברצונך להסיר כרטיס זה'))
    this.getdata.deleteFromCart(id);
    
  }

}
