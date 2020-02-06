import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { PushNotificationOptions, PushNotificationService } from 'ngx-push-notifications';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  constructor(public auth: AuthService, private _pushNotificationService: PushNotificationService) { }

  ngOnInit() {
    this._pushNotificationService.requestPermission();
    this.showNoti();
  }

  showNoti() {
    const title = 'Bem vindo à pagina Perfil!';
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