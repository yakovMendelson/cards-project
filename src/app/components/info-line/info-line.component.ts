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
  admin:boolean=false
  @ViewChild("login") login:ElementRef
  constructor(private router: Router, private userSER: HttpService) { }
  ngOnInit(): void {
    this.userSER.userLoginReady().subscribe(use => {
      if (use) {
        this.user = use
        this.admin=use.admin
        this.login.nativeElement.textContent="להתתנתקות";
      }
    }
    )
  }

  search(event) {

    this.router.navigate(['search'], { queryParams: { searchId: event } })
  }
}


