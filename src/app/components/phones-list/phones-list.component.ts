import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { Phone } from 'src/app/models/phone.model';
import { map } from 'rxjs/operators';
import { GetDataService } from 'src/app/services/get-data.service';
import { ActivatedRoute } from '@angular/router';


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


