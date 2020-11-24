import {Injectable} from '@angular/core';
import {Vet} from '../vets/vet';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {API_URL} from '../app.costants';


@Injectable({
  providedIn: 'root'
})
export class VetsService {

  constructor(private http: HttpClient) {
  }

  public getVets(): Observable<any> {
    return this.http.get<Vet[]>(`${API_URL}/vets`);
  }
}
