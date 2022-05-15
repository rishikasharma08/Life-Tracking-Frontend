import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { MainserviceService } from 'src/app/core/services/mainservice.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  yesSignup: boolean = true;
  yesLogin: boolean = false;
  data: any;

  constructor(private service: MainserviceService, private route: Router) { }

  ngOnInit(): void {
  }
  registerForm = new FormGroup({
    username: new FormControl(""),
    email: new FormControl(""),
    password: new FormControl(""),
    contact: new FormControl(""),
    gender: new FormControl(""),
    address: new FormControl(""),
    dob: new FormControl("")
  });

  loginForm = new FormGroup({
    email: new FormControl(""),
    password: new FormControl("")
  });


  login() {
    let body = {
      email: this.loginForm.value.email,
      password: this.loginForm.value.password
    }

    this.service.api(body, `life_tracking/login_user`, 200, 'post')
      .subscribe((res) => {
        console.log(res.msg);
        if (res.error == 0) {
          this.service.customPopups(res.msg, 0);
          this.service.getUserInfo(res.user_id);

          this.service.userInfo.subscribe((data: any) => {
            localStorage.setItem('userToken', data[0].user_token);
            localStorage.setItem('userId', data[0].user_id);
            this.route.navigate(['/home']);
            if (data[0].yesHealth == 1) {
              localStorage.setItem('yesHealth', "1")
            }
            if (data[0].yesWealth == 1) {
              localStorage.setItem('yesWealth', "1")
            }
          })
        }
        else {
          this.service.customPopups(res.msg, 1);
        }
      })
  }

  registerSubmited() {
    let body = {
      name: this.registerForm.value.username,
      email: this.registerForm.value.email,
      password: this.registerForm.value.password,
      contact: this.registerForm.value.contact,
      address: this.registerForm.value.address,
      gender: this.registerForm.value.gender,
      dob: this.registerForm.value.dob
    }

    this.service.api(body, `life_tracking/first_register`, 200, 'post')
      .subscribe((res) => {
        if (res.error == 0) {
          this.service.customPopups(res.msg, 0);
          this.service.getUserInfo(res.user_id);
          this.service.userInfo.subscribe((data: any) => {
            localStorage.setItem('userToken', data[0].user_token);
            localStorage.setItem('userId', data[0].user_id);
            this.route.navigate(['/home']);
            if (data[0].yesHealth == 1) {
              localStorage.setItem('yesHealth', "1")
            }
            if (data[0].yesWealth == 1) {
              localStorage.setItem('yesWealth', "1")
            }
          })
        }
        else {
          this.service.customPopups(res.msg, 1);
        }
      })
  }

  toggleForm(val: any) {
    this.yesSignup = val == 1 ? true : false;
    this.yesLogin = val == 2 ? true : false;
  }

  // TODO: Use EventEmitter with form value
}
