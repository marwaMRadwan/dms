import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MyserviceService } from '../../myservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrl: './adduser.component.css'
})
export class AdduserComponent {
  isSubmitted = false
  startDate = new Date().toISOString().slice(0, 16);
  addUser = new FormGroup({
    firstname : new FormControl("", [Validators.required
      
      // , Validators.email, Validators.min(50),Validators.max(200), Validators.minLength(10), Validators.maxLength(100), Validators.pattern('^[0-9]*$')
      ]),
    "lastname": new FormControl(),
    "email": new FormControl(),
    "password":new FormControl(),
    "confirm_password": new FormControl(),
    "phone": new FormControl(),
    "birth_date": new FormControl(this.startDate),
    "gender": new FormControl(),
    "country": new FormControl(),
    "governorate": new FormControl(),
    "company": new FormControl("techs experts")
  })
  constructor(private _ser:MyserviceService, private _r: Router){

  }
  get fname(){
    return this.addUser.controls.firstname
  }
  get userData(){
    return this.addUser.controls
  }
  phoneErr=""
  emailErr=""
  addMe(){
    // this.isSubmitted=true
    // console.log(this.addUser.value)
    if(this.addUser.valid){
      this._ser.register(this.addUser.value).subscribe(
        (res)=>{

        },
        (err)=>{

        },
        ()=>{
          this.addUser.reset()
this._r.navigate(['/x'])
        }
      )
    }
  }
}
