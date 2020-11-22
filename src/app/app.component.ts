import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  shabat;
  title = 'phone-store-project';
  onActivate() {
    window.scrollTo(0, 0)
  }
  ngOnInit() {
    var D = new Date();
    var d = D.getDay();
    var h = D.getHours();
    if((d ==5 && h > 16) || (d == 6&& h < 17))
      this.shabat=true;
  }

}
