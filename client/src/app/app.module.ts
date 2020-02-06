import { LayoutModule } from '@angular/cdk/layout';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { environment } from '../environments/environment';
import { ApiModule } from './api-client/api.module';
import { Configuration, ConfigurationParameters } from './api-client/configuration';
import { BASE_PATH } from './api-client/variables';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialLayoutComponent } from './material-layout/material-layout.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ProfileComponent } from './profile/profile.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { RegistarComponent } from './registar/registar.component';
import { ContactosComponent } from './contactos/contactos.component';
import { EnviarMensagemComponent } from './enviar-mensagem/enviar-mensagem.component';
import { FormsModule, FormGroup, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { RecaptchaModule, RECAPTCHA_SETTINGS, RecaptchaSettings, RecaptchaFormsModule } from 'ng-recaptcha';
import { ServiceWorkerModule } from '@angular/service-worker';

/**
 * Build API configuration
 */

export function buildApiConfiguration() {
  const configurationParameters: ConfigurationParameters = {};
  // TODO: Token should be injected using HTTP Interceptor pattern (@see link in Moodle)
  const config = new Configuration(configurationParameters);
  return config;
}

@NgModule({
  declarations: [
    AppComponent,
    MaterialLayoutComponent,
    NavBarComponent,
    ProfileComponent,
    LoginComponent,
    HomeComponent,
    RegistarComponent,
    ContactosComponent,
    EnviarMensagemComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatRadioModule,
    MatCardModule,
    ReactiveFormsModule,
    LayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    RecaptchaModule.forRoot(),
    ApiModule.forRoot(buildApiConfiguration),
    FormsModule, 
    RecaptchaModule,
    RecaptchaFormsModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
  ],
  providers: [{
    provide: RECAPTCHA_SETTINGS,
    useValue: {
      siteKey: '6Ld9pdUUAAAAAF8kZHK66smeEKL21ZzmH7zgyUdE',
    } as RecaptchaSettings,
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }