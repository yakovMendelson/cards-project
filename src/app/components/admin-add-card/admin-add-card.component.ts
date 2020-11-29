import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { GetDataService } from 'src/app/services/get-data.service';
import { HttpService } from 'src/app/services/http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-add-card',
  templateUrl: './admin-add-card.component.html',
  styleUrls: ['./admin-add-card.component.css']
})
export class AdminAddCardComponent implements OnInit {

  formGrop: FormGroup = new FormGroup({
    location: new FormControl('', [Validators.required]),
    model: new FormControl('', [Validators.required]),
    price: new FormControl('', [Validators.required]),
    image: new FormControl('', [Validators.required]),
    details: new FormControl('', [Validators.required]),
    category: new FormControl('', [Validators.required])
  });

  constructor(private getDataSRV: GetDataService, private setDataSER: HttpService, private router: Router) { }

  ngOnInit(): void {
  }


  addCard() {
    let grop = this.formGrop.controls;
    let price = Number(grop.price.value)
    let body = { location: grop.location.value, model: grop.model.value, price: price, imagePath: grop.image.value, shortDetails: grop.details.value, category: grop.category.value };
    this.setDataSER.createCard(body).subscribe(() => {
      this.getDataSRV.refresh()
      this.router.navigate(['../../admin'])
    })


  }

}
