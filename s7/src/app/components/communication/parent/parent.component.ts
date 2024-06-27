import { Component, SimpleChange, viewChild } from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css'
})
export class ParentComponent {
  dataParent = 5
  // myinc(){
  //   this.dataParent = this.dataParent + 1
  // }
  // constructor(){ console.log("parent constructor")}
  // ngOnChanges(changes: SimpleChange){ 
  //   console.log("parent on change") 
  //   console.log(changes)

  // }
  // ngOnInit(){ 
  //   console.log("parent on change") 
  // }
  // ngOnDoCheck(){ console.log("parent ngOnDoCheck") }
  // ngAfterContentInit(){ console.log("parent ngAfterContentInit") }
  // ngAfterContentChecked(){ console.log("parent ngAfterContentChecked") }
  // ngAfterViewInit(){ console.log("parent ngAfterViewInit") }
  // ngAfterViewChecked(){ console.log("parent ngAfterViewChecked") }
  // ngOnDestroy(){  console.log("parent ngOnDestroy") }
test(data:any){
  this.dataParent = data
}
// @viewChild child: ChildComponent
}
