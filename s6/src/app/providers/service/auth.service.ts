import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public isLoggedIn = false
  public userData:any = null
  
  constructor(private _http: HttpClient) { }
  login(data:any){
    return this._http.post("http://faedg.techs-experts.net/api/auth/users/login", data)
  }
  me(){
    return this._http.get("http://faedg.techs-experts.net/api/auth/users/me")
  }
}
