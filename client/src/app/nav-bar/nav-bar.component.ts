import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { PushNotificationOptions, PushNotificationService } from 'ngx-push-notifications';

@Component({
  selector: 'app-navbar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  constructor(public auth: AuthService, private _pushNotificationService: PushNotificationService) { }
  ngOnInit() {
    this._pushNotificationService.requestPermission();
    this.myFunction();
  }

  myFunction() {
    const title = 'Hello';
    const options = new PushNotificationOptions();
    options.body = 'Native Push Notification';
 
    this._pushNotificationService.create(title, options).subscribe((notif) => {
      if (notif.event.type === 'show') {
        console.log('onshow');
        setTimeout(() => {
          notif.notification.close();
        }, 3000);
      }
      if (notif.event.type === 'click') {
        console.log('click');
        notif.notification.close();
      }
      if (notif.event.type === 'close') {
        console.log('close');
      }
    },
    (err) => {
         console.log(err);
    });
}

}