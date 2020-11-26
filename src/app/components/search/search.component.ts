import { Component, OnInit } from '@angular/core';
import { GetDataService } from 'src/app/services/get-data.service';
import { Card } from 'src/app/models/card.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(public getDataSRV: GetDataService, private route: ActivatedRoute) { }

  model: string;

  modelsPhons: string[] = [];
  detialsPhones: Card[] = [];
  ngOnInit(): void { 
    this.getDataSRV.phonedIsFull.subscribe((phonedIsFull) => {
        if (phonedIsFull) {
          this.getDataSRV.phones.forEach((phone) => {
            this.modelsPhons.push(phone.model);
            if(this.model)
               this.search()
          });
        }
      });
    this.route.queryParams.subscribe(params => {
      this.model = params['searchId'];
      this.search()
    });

  }
  search(){
    let s = this.modelsPhons.filter(c => c.toLowerCase().startsWith(this.model));
    let detialsPhones: Card[] = [];
    s.forEach(model => {
      this.getDataSRV.phones.forEach(phone => {
        
        if (phone.model == model) {
            detialsPhones.push(phone)
        }
    });
  });
  this.detialsPhones=detialsPhones

  }

}
