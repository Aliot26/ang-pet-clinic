import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {API_URL} from '../app.costants';
import {Pet} from '../pet-form/pet';

@Injectable({
  providedIn: 'root'
})
export class PetDetailsService {

  constructor(
    private http: HttpClient) {
  }

  public addPet(pet): Observable<any> {
    return this.http.post<Pet>(`${API_URL}/pets`, pet);

  }
}
