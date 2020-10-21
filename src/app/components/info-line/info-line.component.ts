import { Component, OnInit } from '@angular/core';
import { GetDataService } from 'src/app/services/get-data.service';
import { Phone } from 'src/app/models/phone.model';
import { Router } from '@angular/router';



@Component({
  selector: 'app-info-line',
  templateUrl: './info-line.component.html',
  styleUrls: ['./info-line.component.css']
})
export class InfoLineComponent implements OnInit {
  [x: string]: any;

  constructor(private router: Router) { }
  ngOnInit(): void {
   

  }

  search(event) {
   
    this.router.navigate(['search'],{queryParams:{searchId:event}})
    }
  }
 

