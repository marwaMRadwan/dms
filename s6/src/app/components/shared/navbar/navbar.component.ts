import { Component } from '@angular/core';
import { AuthService } from '../../../providers/service/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  constructor(public _auth:AuthService){  }
  ngOnInit(){
    this._auth.me().subscribe(
      (res:any)=>{
        this._auth.isLoggedIn=true
        this._auth.userData = res.data
        localStorage.setItem("token", `Bearer ${res.data.token}`)
      },
      (err)=>{ 
        this._auth.userData=null
        this._auth.isLoggedIn=false
        localStorage.removeItem("token")
       },
      ()=>{}
    )
  }
}
