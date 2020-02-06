import { Component, OnInit, VERSION  } from '@angular/core';
import { AccountService } from '../api-client/api/account.service';
import { LoginRequest, SupportService } from '../api-client';
import { UserService } from 'src/app/services/user.service';
import { FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { PushNotificationOptions, PushNotificationService } from 'ngx-push-notifications';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public declarativeFormCaptchaValue;
  public version = VERSION.full;

  userForm = this.formBuilder.group({// definir os campos do formulario
    pass: [null, [Validators.required, Validators.maxLength(50)]],
    email: [null, [Validators.required, Validators.email, Validators.maxLength(50)]],
    captcha:[null, [Validators.required]]
  });

  /**
   * Constructor
   * @param router Router
   * @param activatedRoute Activated route
   * @param formBuilder Form builder
   * @param userService User service
   * @param snackBar Snack bar
   */
  constructor(
    private accountService: AccountService,
    private formBuilder:FormBuilder, //Servisso a que vamos recorrer no servidor

    private _pushNotificationService: PushNotificationService,
  ) { }

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

  public doLogin() {
    const loginRequest: LoginRequest = {
      email: "email",
      password: "password"
    };
    this.accountService.accountLoginPost(loginRequest)
    
  }

}