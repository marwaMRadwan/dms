import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private _http: HttpClient) { }

  getCountries(): Observable<any>{
    return this._http.get('https://dashboad.elmarsah.com/api/general/countries');
  }
  getStates(id:number):Observable<any>{
    return this._http.get(`https://dashboad.elmarsah.com/api/general/states/${id}`)    
  }
}
