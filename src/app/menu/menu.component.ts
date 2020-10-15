import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from '../services/authentication.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  // userLogged = false;

  constructor(
    public authentication: AuthenticationService
  ) {
  }

  ngOnInit(): void {
    // this.userLogged = this.authentication.isUserLogged();
  }

}
