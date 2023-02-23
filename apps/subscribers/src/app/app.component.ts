import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'tekus-subscribers-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'subscribers';

  constructor(public htt: HttpClient) {
   /*  this.htt.post('/api/account/login', {
      "UserName": "patatasss",
      "Password": "MrPotat0"
    }).subscribe(r => {
      console.log(r);

    }) */
  }
}
