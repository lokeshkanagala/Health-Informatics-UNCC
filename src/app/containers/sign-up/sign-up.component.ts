import {Component, Injectable, OnInit, ViewChild} from '@angular/core';
import {NgForm} from "@angular/forms";
import {AuthService} from '../../shared/services/auth.service';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
 })
@Injectable()
export class SignUpComponent implements OnInit {

  @ViewChild('f') form: NgForm;
  constructor(private authService: AuthService, private router:Router, private route: ActivatedRoute) {}

  ngOnInit() {

  }

  onSubmit() {
    var username = this.form.value.username;
    var password = this.form.value.password;
    var phonenumber = this.form.value.phonenumber;
    var email = this.form.value.email;
    this.authService.SignUpUser(username, password, phonenumber, email).then((user: string)=>{
      this.router.navigate(['/verify'],{queryParams: {username: username}});
    }).catch((error: string)=>{
      this.router.navigate(['/']);
    });
  }

}
