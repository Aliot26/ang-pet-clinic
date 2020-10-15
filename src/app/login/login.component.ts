import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AuthenticationService} from '../services/authentication.service';

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
  userLogged = false;

  constructor(
    private router: Router,
    public authentication: AuthenticationService) {
  }

  ngOnInit(): void {
    console.log(this.userLogged);
    this.userLogged = this.authentication.isUserLogged();
    console.log(this.userLogged);
  }

  loginHandle(): void {
    if (this.authentication.authenticate(this.username, this.password)) {
      this.userLogged = true;
      this.router.navigate(['err']);

      console.log(this.username);
      console.log(this.password);
    } else {
      this.router.navigate(['']);
    }

  }
}
