import { Component, OnInit } from '@angular/core';
import { GetDataService } from 'src/app/services/get-data.service';
import { ActivatedRoute } from '@angular/router';
import { Card } from 'src/app/models/card.model';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  constructor(public getDataSRV: GetDataService,private route: ActivatedRoute) { }


  ngOnInit(): void { 
    
    // this.route.queryParams.subscribe(params => {
    //   //  = params['category'];
    //   // this.search()
    // });

  }
 

}
