import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../providers/service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  constructor(public _auth:AuthService){
    console.log("login template")
  }
  login =new FormGroup({
    email:new FormControl("mohammad@test.com", Validators.compose([
      Validators.email,
      Validators.required
    ])),
    password: new FormControl("123456", Validators.compose([
      Validators.required,
      Validators.minLength(6)
    ]))
  })
  get email(){
    return this.login.controls.email
  }
  logMeIn(){
    this._auth.login(this.login.value).subscribe(
      (res:any)=>{
        console.log(res)
        localStorage.setItem('token', `Bearer ${res.data.token}`)
        this._auth.isLoggedIn = true
        this._auth.userData = res.data
    },
  ()=>{},
()=>{
  
})
  }
}
