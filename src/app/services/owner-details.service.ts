import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {API_URL} from '../app.costants';
import {Owner} from '../owner-details/owner';

@Injectable({
  providedIn: 'root'
})
export class OwnerDetailsService {

  constructor(private http: HttpClient) {
  }

  public getOwnerById(ownerId): Observable<any> {
    return this.http.get<Owner>(`${API_URL}/owners/user/` + ownerId);
  }

  public getOwnerByOwnerId(ownerId): Observable<any> {
    return this.http.get<Owner>(`${API_URL}/owners/` + ownerId);
  }

  public editOwner(owner, id): Observable<any> {
    return this.http.patch<Owner>(`${API_URL}/owners/` + id, owner);
  }
}
