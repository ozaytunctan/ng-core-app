import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService, Login, LoginType, LoggedInUser } from 'core-lib';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  loginBuilder: FormBuilder;

  loginForm: FormGroup;

  constructor(private fb: FormBuilder, public route: Router, public auth: AuthenticationService) {
    this.loginBuilder = fb;
    if (this.auth.getLoggedInUser()) {
      this.navigateToHomePage();
    }
  }

  ngOnInit() {

    this.initialize();

  }

  initialize() {
    this.loginForm = this.loginBuilder.group({
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    });
  }
  login() {
    debugger;
    if (this.loginForm.valid) {
      let login: Login = {
        username: this.loginForm.value.username,
        password: this.loginForm.value.password,
        email: this.loginForm.value.username,
        status: LoginType.USER
      };
      let loggedInUser: LoggedInUser = this.auth.login(login);

      if (loggedInUser) {
        this.navigateToHomePage();
      }
      else {
        alert("Lütfen Kullanıcı Bilgilerinizi doğru giriniz.!!!");
      }
    }


  }

  navigateToHomePage() {
    this.route.navigate(["/recipes"]);
  }

}
