import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { NavbarComponent } from './containers/navbar/navbar.component';
import { HomeComponentComponent } from './containers/home-component/home-component.component';
import {RouterModule} from "@angular/router";
import { SignUpComponent } from './containers/sign-up/sign-up.component';
import {appRoutes} from "./app.routes";
import {AuthService} from "./shared/services/auth.service";
import { VerifyComponent } from './containers/verify/verify.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { LoginComponent } from './containers/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponentComponent,
    SignUpComponent,
    VerifyComponent,
    WelcomeComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
