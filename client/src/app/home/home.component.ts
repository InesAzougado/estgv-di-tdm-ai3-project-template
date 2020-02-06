import { Component, OnInit } from '@angular/core';
import { PushNotificationOptions, PushNotificationService } from 'ngx-push-notifications';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private _pushNotificationService: PushNotificationService) { }

  ngOnInit() {
    this._pushNotificationService.requestPermission();
    this.showNoti();
  }

  showNoti() {
    const title = 'Bem vindo à página Inicio!';
    const options = new PushNotificationOptions();
    options.body = 'Consulte as informações do nosso Projeto';
 
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
