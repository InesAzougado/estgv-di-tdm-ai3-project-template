import { Component, OnInit } from '@angular/core';
import { AccountService } from '../api-client/api/account.service';
import { LoginRequest, SupportService } from '../api-client';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

  constructor(
    private accountService: AccountService, //Servisso a que vamos recorrer no servidor
    private supportService: SupportService,
  ) {
    // TODO: Get username and password from form and run this on user click of a button
    // accountService.accountLoginPost(username, password);
  }

  ngOnInit() {
  }

  doLogin(){ //ASSOIACAO do CLICK do BTN à funçâo
    const loginReq: LoginRequest = {
      
      username:"",
      password:""

    };
    this.accountService.accountLoginPost(loginReq).subscribe()
  
  } 

}