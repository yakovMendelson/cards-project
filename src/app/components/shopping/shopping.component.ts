import { Component, OnInit } from '@angular/core';
import { GetDataService } from 'src/app/services/get-data.service';
import { Phone } from 'src/app/models/phone.model';

@Component({
  selector: 'app-shopping',
  templateUrl: './shopping.component.html',
  styleUrls: ['./shopping.component.css']
})
export class ShoppingComponent implements OnInit {
cart:Phone[]=[]
  constructor(private data: GetDataService) { }

  ngOnInit(): void {
    this.data.chengeCart().subscribe(card=>{
      if(card){
        this.cart=card
      }
    })
  }

  deleteFromCart(id){
 if( confirm('אתה בטוח שברצונך להסיר כרטיס זה'))
    this.data.deleteFromCart(id);
    
  }

}
