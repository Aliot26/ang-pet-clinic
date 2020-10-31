import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from '../services/authentication.service';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {LoginComponent} from '../login/login.component';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {


  constructor(
    public authentication: AuthenticationService,
    private modalService: NgbModal
  ) {
  }

  ngOnInit(): void {

  }

  openLoginForm(): void {
    const modalRef = this.modalService.open(LoginComponent);
  }

  openSignUpForm(): void {
  }

}
