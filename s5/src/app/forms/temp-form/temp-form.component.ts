import { Component } from '@angular/core';

@Component({
  selector: 'app-temp-form',
  templateUrl: './temp-form.component.html',
  styleUrl: './temp-form.component.css'
})
export class TempFormComponent {
  x = ""
addMe(add:any){
  // alert("hello")
  console.log(add.value)
}
}
