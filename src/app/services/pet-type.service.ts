import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Owner} from '../owner-details/owner';
import {API_URL} from '../app.costants';

@Injectable({
  providedIn: 'root'
})
export class PetTypeService {

  constructor(private http: HttpClient) {
  }

  public getAllPetTypes(): Observable<any> {
    return this.http.get<any>(`${API_URL}/petTypes`);
  }
}
