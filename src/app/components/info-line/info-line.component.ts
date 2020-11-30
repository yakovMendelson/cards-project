import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

import { Router } from '@angular/router';
import { User } from 'src/app/models/user.model';
import { HttpService } from 'src/app/services/http.service';




@Component({
  selector: 'app-info-line',
  templateUrl: './info-line.component.html',
  styleUrls: ['./info-line.component.css']
})
export class InfoLineComponent implements OnInit {
  user: User;
  boolAdmin:string='block'
  boolClient:string='block'
  boolLogOut:string='none'
  admin:boolean=false
  constructor(private router: Router, private userSER: HttpService) { }
  ngOnInit(): void {
    if(localStorage.getItem('admin'))
    this.admin=true
    this.userSER.userLoginReady().subscribe(use => {
      if (use) {
        this.user = use
        this.admin=use.admin
      }
    }
    )
  }

  search(event) {

    this.router.navigate(['search'], { queryParams: { searchId: event } })
  }
  logout(){

  }
}


