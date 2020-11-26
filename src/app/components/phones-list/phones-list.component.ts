import { Component, OnInit } from '@angular/core';
import { GetDataService } from 'src/app/services/get-data.service';


@Component({
  selector: 'app-phones-list',
  templateUrl: './phones-list.component.html',
  styleUrls: ['./phones-list.component.css']
})
export class PhonesListComponent implements OnInit {
  constructor(public getDataSRV: GetDataService) { }

   ngOnInit(): void {
   }

  }


