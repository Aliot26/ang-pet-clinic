import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {API_URL} from '../app.costants';
import {PetType} from '../pet-form/petType';

@Injectable({
  providedIn: 'root'
})
export class PetTypeService {

  constructor(private http: HttpClient) {
  }

  public getAllPetTypes(): Observable<PetType[]> {
    return this.http.get<PetType[]>(`${API_URL}/petTypes`);
  }
}
