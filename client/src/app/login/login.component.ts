import { Component, OnInit, VERSION  } from '@angular/core';
import { AccountService } from '../api-client/api/account.service';
import { LoginRequest, SupportService } from '../api-client';
import { UserService } from 'src/app/services/user.service';
import { FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

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
  ) { }

  ngOnInit() {

  }

  public doLogin(event: Event) {
    const loginRequest: LoginRequest = {
      email: "email",
      password: "password"
    };
    this.accountService.accountLoginPost(loginRequest)
    
  }

}