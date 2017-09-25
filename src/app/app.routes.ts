import {Routes} from '@angular/router';
import { SignUpComponent } from './containers/sign-up/sign-up.component';
import { LoginComponent } from './containers/login/login.component';
import { HomeComponentComponent} from './containers/home-component/home-component.component';
import {VerifyComponent} from './containers/verify/verify.component';
import {WelcomeComponent} from './components/welcome/welcome.component';

export const appRoutes: Routes = [
  {path: '', component: HomeComponentComponent},
  {path: 'login', component: LoginComponent},
  {path: 'signup', component: SignUpComponent},
  {path: 'verify', component: VerifyComponent},
  {path: 'welcome', component: WelcomeComponent}
  ];
