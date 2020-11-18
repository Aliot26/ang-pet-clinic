import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from '../services/authentication.service';
import {TokenStorageService} from '../services/token-storage.service';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {RegisterComponent} from '../register/register.component';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: any = {};
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];
  data: object;

  constructor(
    private authService: AuthenticationService,
    private tokenStorage: TokenStorageService,
    public activeModal: NgbActiveModal,
    private modalService: NgbModal) {
  }

  ngOnInit(): void {
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      this.roles = this.tokenStorage.getUser().roles;
    }
  }

  onSubmit(): void {
    this.authService.login(this.form).subscribe(
      data => {
        this.tokenStorage.saveToken(data);
        this.tokenStorage.saveUser(data);
        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.roles = this.tokenStorage.getUser().roles;
        this.activeModal.close('login success');
        this.reloadPage();
      },
      err => {
        this.errorMessage = err.error.message;
        this.isLoginFailed = true;
      }
    );
  }

  openSignUpForm(): void {
    console.log('hhh');
    this.activeModal.dismiss();
    const modalReg = this.modalService.open(RegisterComponent);
    modalReg.result.then((result) => {
      console.log('reg');
    }).catch((error) => {
      console.log('error register');
    });
  }

  reloadPage(): void {
    window.location.reload();
  }

}
