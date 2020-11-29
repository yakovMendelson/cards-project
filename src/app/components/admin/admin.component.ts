import { Component, OnInit } from '@angular/core';
import { GetDataService } from 'src/app/services/get-data.service';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(public getDataSRV: GetDataService, public setDataSRV: HttpService) { }

  ngOnInit(): void {
  }

  delete(cardId) {
    if (confirm('Are you sure'))
      this.setDataSRV.deleteCard(cardId).subscribe(() => this.getDataSRV.refresh())
  }
}


