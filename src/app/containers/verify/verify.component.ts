import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from "@angular/forms";
import {AuthService} from "../../shared/services/auth.service";
import {ActivatedRoute, Params, Router} from "@angular/router";

@Component({
  selector: 'app-verify',
  templateUrl: './verify.component.html',
  styleUrls: ['./verify.component.css']
})
export class VerifyComponent implements OnInit {
  @ViewChild('f') form: NgForm;
  username: string;

  constructor(private authService: AuthService, private router: Router, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.queryParams.subscribe((queryParams: Params) => {
      this.username = queryParams['username'];
    })
  }

  onSubmit() {
    var otp = this.form.value.otp;
    console.log(otp, this.username);
    this.authService.VerifyUser(otp, this.username).then((success: string) => {
      this.router.navigate(['/welcome']);
    }).catch((error: string) => {
      alert('Invalid Credentials ' + error);
      this.router.navigate(['/signup']);
    });
  }
}
