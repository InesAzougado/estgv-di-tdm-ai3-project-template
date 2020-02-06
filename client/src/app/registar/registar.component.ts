import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { HttpClient } from '@angular/common/http';
import { first } from 'rxjs/operators';
import { UserService } from '../services/user.service';
import { FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { CommunicationService } from '../api-client/api/communication.service';
import { SendEmailRequest } from '../api-client';
import { PushNotificationOptions, PushNotificationService } from 'ngx-push-notifications';

@Component({
  selector: 'app-registar',
  templateUrl: './registar.component.html',
  styleUrls: ['./registar.component.scss']
})
export class RegistarComponent implements OnInit {

  public declarativeFormCaptchaValue;

  registForm = this.formBuilder.group({
    nome: [null, [Validators.required, Validators.maxLength(50)]],
    apelido: [null, [Validators.required, Validators.maxLength(50)]],
    nomeUt: [null, [Validators.required, Validators.maxLength(50)]],
    email: [null, [Validators.required, Validators.email, Validators.maxLength(50)]],
    pass: [null, [Validators.required, Validators.maxLength(50)]],
  });
  constructor(public auth: AuthService,
    private httpClient: HttpClient,
    private formBuilder: FormBuilder,
    private userService: UserService,
    private comunicationservice: CommunicationService,
    private _pushNotificationService: PushNotificationService,
  ) { }

  ngOnInit() {
    this._pushNotificationService.requestPermission();
    this.showNoti();
  }

  showNoti() {
    const title = 'Bem vindo!';
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
