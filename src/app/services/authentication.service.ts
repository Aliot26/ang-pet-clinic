import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(
    private http: HttpClient
  ) {
  }

  authenticate(username, password): boolean {
    console.log(this.isUserLogged());
    if (username && password) {
      sessionStorage.setItem('authenticaterUser', username);
      return true;
    } else {
      return false;
    }
  }

  isUserLogged(): boolean{
    const user = sessionStorage.getItem('authenticaterUser');
    return (user !== null);
  }
}
