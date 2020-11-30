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

  location: string;

  modelsCard: string[] = [];
  detialsCard: Card[] = [];
  ngOnInit(): void { 
    this.getDataSRV.phonedIsFull.subscribe((phonedIsFull) => {
        if (phonedIsFull) {
          this.getDataSRV.cards.forEach((card) => {
            this.modelsCard.push(card.location);
            if(this.location)
               this.search()
          });
        }
      });
    this.route.queryParams.subscribe(params => {
      this.location = params['searchId'];
      this.search()
    });

  }
  search(){
    let s = this.modelsCard.filter(c => c.toLowerCase().startsWith(this.location));
    let detialsCard: Card[] = [];
    s.forEach(location => {
      this.getDataSRV.cards.forEach(card => {
        
        if (card.location == location) {
            detialsCard.push(card)
        }
    });
  });
  this.detialsCard=detialsCard

  }

}
