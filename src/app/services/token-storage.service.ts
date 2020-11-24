import {Injectable} from '@angular/core';
import {TOKEN_KEY, USER_KEY, USERID_KEY} from '../app.costants';
import {User} from '../users/users';

@Injectable({
  providedIn: 'root'
})
export class TokenStorageService {

  constructor() {
  }

  public signOut(): void {
    localStorage.clear();
  }

  public saveToken(user): void {
    localStorage.removeItem(TOKEN_KEY);
    localStorage.setItem(TOKEN_KEY, user['token']);
  }

  public getToken(): string {
    return localStorage.getItem(TOKEN_KEY);
  }

  public saveUser(user): void {
    localStorage.removeItem(USER_KEY);
    localStorage.setItem(USER_KEY, user['username']);
  }

  public getUser(): any {
    return localStorage.getItem(USER_KEY);
  }

  public saveUserId(user): void {
    localStorage.removeItem(USERID_KEY);
    localStorage.setItem(USERID_KEY, user['id']);
  }

  public getUserId(): any {
    return localStorage.getItem(USERID_KEY);
  }
}
