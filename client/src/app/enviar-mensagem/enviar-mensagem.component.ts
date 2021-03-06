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
  selector: 'app-enviar-mensagem',
  templateUrl: './enviar-mensagem.component.html',
  styleUrls: ['./enviar-mensagem.component.scss']
})
export class EnviarMensagemComponent implements OnInit {

  public declarativeFormCaptchaValue;
  userForm = this.formBuilder.group({
    from: [null, [Validators.required, Validators.email, Validators.maxLength(50)]],
    to: [null, [Validators.required, Validators.email, Validators.maxLength(50)]],
    subject: [null, [Validators.required, Validators.maxLength(50)]],
    message: [null, [Validators.required, Validators.maxLength(250)]],
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
    const title = 'Bem vindo à página Eviar Mensagem!';
    const options = new PushNotificationOptions();
    options.body = 'Envi-e a sua mensagem apartir da nossa página!';
 
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
  doSupport() {
    const sendmail: SendEmailRequest = this.userForm.value;
    console.log(sendmail);
    this.comunicationservice.communicationSendEmailPost(sendmail).subscribe( {
      next: this.onSuccess.bind(this),
      error: this.onError.bind(this),

  }
    )
  }

  onSuccess(res: any) { // MSG DE SUCESSO
    console.log('SUCESSO');
  }

  onError(res: any) {// MSG DE ERRO
    console.log('ERRO')
  }

}