import {Component, Injectable, OnInit, ViewChild} from '@angular/core';
import {NgForm} from "@angular/forms";
import {AuthService} from "../../shared/services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
@Injectable()
export class LoginComponent implements OnInit {
  @ViewChild('f')form: NgForm;
  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }
  onSubmit() {
    var username= this.form.value.username;
    var password = this.form.value.password;
    this.authService.LoginUser(username,password).then((token: string)=> {
      console.log('This is the JWT token in login component'+ token);
      this.router.navigate(['/welcome']);
    }).catch((error: string) => {
      console.log('Catched an error'+ error);
    });
  }

}
