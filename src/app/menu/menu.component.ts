import {Component, OnInit} from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {LoginComponent} from '../login/login.component';
import {TokenStorageService} from '../services/token-storage.service';
import {RegisterComponent} from '../register/register.component';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  isLoggedIn = false;

  constructor(
    public tokenService: TokenStorageService,
    private modalService: NgbModal
  ) {
  }

  ngOnInit(): void {
    if (this.tokenService.getToken()) {
      this.isLoggedIn = true;
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
    console.log("hhh");
    const modalReg = this.modalService.open(RegisterComponent);
    modalReg.result.then((result) => {
      console.log("reg");
    }).catch((error) => {
      console.log("error register");
    });
  }

  logout(): void {
    this.tokenService.signOut();
    this.isLoggedIn = false;
  }
}
