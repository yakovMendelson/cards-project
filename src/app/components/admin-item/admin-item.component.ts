import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpService } from 'src/app/services/http.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Card } from 'src/app/models/card.model';
import { GetDataService } from 'src/app/services/get-data.service';

@Component({
  selector: 'app-admin-item',
  templateUrl: './admin-item.component.html',
  styleUrls: ['./admin-item.component.css']
})
export class AdminItemComponent implements OnInit {

  formGrop: FormGroup = new FormGroup({
    location: new FormControl('', [ Validators.required]),
    model: new FormControl('', [ Validators.required]),
    price: new FormControl('', [ Validators.required]),
    image: new FormControl('', [ Validators.required]),
    details: new FormControl('', [ Validators.required]),
    category: new FormControl('', [ Validators.required])
  });
  
  id: number;
  card: Card;
  constructor(private route: ActivatedRoute, private getDataSRV: GetDataService,private setDataSER:HttpService,private router:Router) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];

    this.getDataSRV.phonedIsFull.subscribe((phonedIsFull ) => {
      if (phonedIsFull)
      this.getDataSRV.cards.forEach((card) => {
        if (card.id == this.id) {
            this.card=card;  
            this.formGrop.controls.location.setValue(card.location)
            this.formGrop.controls.model.setValue(card.model)
            this.formGrop.controls.price.setValue(card.price)
            this.formGrop.controls.image.setValue(card.imagePath)
            this.formGrop.controls.details.setValue(card.shortDetails)
            this.formGrop.controls.category.setValue(card.category)
        }
      });
    }
    )
  }



  editCard() {
    let grop =this.formGrop.controls;
    let price =Number(grop.price.value)
    let body={location: grop.location.value,model: grop.model.value,price: price,imagePath: grop.image.value,shortDetails: grop.details.value,category: grop.category.value};
    this.setDataSER.editCard(body,this.card.id);
    this.getDataSRV.refresh()
    this.router.navigate(['../../admin'])
    
  }

}



