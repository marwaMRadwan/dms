import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-mycomp',
  templateUrl: './mycomp.component.html',
  styleUrl: './mycomp.component.css'
})
export class MycompComponent {
  counter = 1

  @HostListener('window:keydown.Backspace' , ['$event'])
  handelbackspace(event:KeyboardEvent){
    this.counter--
  }
  @HostListener('window:keydown.enter' , ['$event'])
  mm(event:KeyboardEvent){
    this.counter++
  }
}
