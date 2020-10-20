import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {API_URL} from '../app.costants';
import {Observable} from 'rxjs';


const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {


  constructor(
    private http: HttpClient
  ) {
  }

  login(credentials): Observable<any> {
    return this.http.post(API_URL + '/auth/signin', {
      username: credentials.username,
      password: credentials.password
    }, httpOptions);
  }

  register(user): Observable<any> {
    return this.http.post(API_URL + '/auth/signup', {
      username: user.username,
      email: user.email,
      password: user.password
    }, httpOptions);
  }
}
