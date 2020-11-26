import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GetDataService } from 'src/app/services/get-data.service';
import { Card } from 'src/app/models/card.model';


@Component({
  selector: 'app-phone-item',
  templateUrl: './phone-item.component.html',
  styleUrls: ['./phone-item.component.css']
})
export class PhoneItemComponent implements OnInit {

 

  id: number;
  card: Card;
  constructor(private route: ActivatedRoute, private getDataSRV: GetDataService) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];

    this.getDataSRV.phonedIsFull.subscribe((phonedIsFull ) => {
      if (phonedIsFull)
      this.getDataSRV.phones.forEach((phone) => {
        if (phone.id == this.id) {
            this.card=phone;  
        }
      });
    }
    )
  }
  addToCart(model){
    this.getDataSRV.addCard(model);
    alert('המוצר נוסף לעגלה')
  }

}