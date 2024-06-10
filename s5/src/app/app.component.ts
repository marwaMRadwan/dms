import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 's5';
  errMsg = ""
  // myData = {
  //   fName:""
  // }
  myFun(data:NgForm){
    if(data.invalid ){
      this.errMsg="chech your data"
    }
    else{
      this.errMsg=""
    }
    // data.value
    // data.valid
    // data.invalid
    // data.touched
    // data.dirty
    // data.submitted
  }
}
