import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-with-validation',
  templateUrl: './form-with-validation.component.html',
  styleUrl: './form-with-validation.component.css'
})
export class FormWithValidationComponent {
  errMsg :any= {
    'fname':[
      {type:'required', message: "First Name is Required"},
      {type:'minlength', message:"minmium length is 3 chars"}
    ],
    'rePassword':[]
  }
  loginForm: FormGroup = new FormGroup({
    fname:new FormControl("", [Validators.required, Validators.minLength(3)]),
    lname: new FormControl(),
    email: new FormControl(),
    password: new FormControl(),
    rePassword:new FormControl()
  })

  confirmMatch(){
    if(this.loginForm.value.password != this.loginForm.value.rePassword){
      this.errMsg.rePassword.push( {type:'required', message: "Password and Re-Password"})
    }
    else {
      this.errMsg.rePassword=[]
    }
  }
}
