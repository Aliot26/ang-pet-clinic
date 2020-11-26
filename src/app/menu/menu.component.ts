import {Component, OnInit} from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {LoginComponent} from '../login/login.component';
import {TokenStorageService} from '../services/token-storage.service';
import {RegisterComponent} from '../register/register.component';
import {stringify} from 'querystring';
import {Router} from '@angular/router';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  isLoggedIn = false;
  username: string;
  userId: number;

  constructor(
    public tokenService: TokenStorageService,
    private modalService: NgbModal,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    if (this.tokenService.getToken()) {
      this.isLoggedIn = true;
      this.username = this.tokenService.getUser();
      this.userId = this.tokenService.getUserId();
    }
  }

  openLoginForm(): void {
    const modalAuth = this.modalService.open(LoginComponent);
    modalAuth.result.then((result) => {
      console.log(result);
    }).catch((error) => {
      console.log('error login');
    });
  }

  openSignUpForm(): void {
    const modalReg = this.modalService.open(RegisterComponent);
    modalReg.result.then((result) => {
      console.log('reg');
    }).catch((error) => {
      console.log('error register');
    });
  }

  logout(): void {
    this.tokenService.signOut();
    this.isLoggedIn = false;
    this.router.navigate(['']);
  }
}
