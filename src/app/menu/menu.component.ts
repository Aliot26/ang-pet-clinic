import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from '../services/authentication.service';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {LoginComponent} from '../login/login.component';
import {TokenStorageService} from '../services/token-storage.service';


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
    const modalRef = this.modalService.open(LoginComponent);
    modalRef.result.then((result) => {
      console.log(result);

    }).catch((error) => {
      console.log('errorrrr');
      console.log(error);
    });
  }

  openSignUpForm(): void {
  }

  public signOut(): void {
    window.sessionStorage.clear();
    this.isLoggedIn = false;
  }
}
