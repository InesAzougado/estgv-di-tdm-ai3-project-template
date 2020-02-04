import { Component, OnInit } from '@angular/core';
import { AccountService } from '../api-client/api/account.service';
import { LoginRequest, SupportService } from '../api-client';
import { UserService } from 'src/app/services/user.service';
import { FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {


  userForm = this.formBuilder.group({// definir os campos do formulario
    email: [null, [Validators.required, Validators.maxLength(50)]],
    pass: [null, [Validators.required, Validators.email, Validators.maxLength(50)]],
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
  ) { }

  ngOnInit() {

  }

  doLogin(){ //ASSOIACAO do CLICK do BTN à funçâo

    const loginReq: LoginRequest = this.userForm.value as LoginRequest; //chamar os dados do formolario
    this.accountService.accountLoginPost(loginReq).subscribe()
  
  } 

}