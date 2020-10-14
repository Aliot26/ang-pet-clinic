import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = '';
  password = '';
  errorMessage = 'Invalid credentials';
  invalidLogin = false;

  constructor() { }

  ngOnInit(): void {
  }

  loginHandle(): void {
    console.log(this.username);
    console.log(this.password);
  }
}
