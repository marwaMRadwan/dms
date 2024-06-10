import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyserviceService {

  constructor(private _http:HttpClient) { }
  register(data:any){
    return this._http.post('http://dms.techs-experts.net/api/register', data)
  }
}
