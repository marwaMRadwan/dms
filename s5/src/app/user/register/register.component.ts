import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  // formInputs = [
  //   {name:"x", validation:"required email" , classes: "forms-control", type:"email"}
  // ]
  errMsg=""
  onRegister(inputData : NgForm){
    if(inputData.invalid){
      if(inputData.value.userName == "") { 
        this.errMsg +="<li>username is required</li>"
      }
      
    }
  }
}
