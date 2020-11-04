import {Injectable} from '@angular/core';
import {Vets} from '../vets/vets';
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
    return this.http.get<Vets[]>(`${API_URL}/vets`);
  }
}
