import { Component, EventEmitter, Input, Output, SimpleChange } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {
  @Input() dataChild = 0
  @Output() dataChange: EventEmitter<number> = new EventEmitter()

  incData(){
    this.dataChild += 1
    this.dataChange.emit(this.dataChild)
  }
  // constructor(){ console.log("child constructor")}
  // ngOnChanges(changes: SimpleChange){ 
  //   console.log("child on change") 
  //   console.log(changes)

  // }
  // ngOnInit(){ 
  //   console.log("child on change") 
  // }
  // ngOnDoCheck(){ console.log("child ngOnDoCheck") }
  // ngAfterContentInit(){ console.log("child ngAfterContentInit") }
  // ngAfterContentChecked(){ console.log("child ngAfterContentChecked") }
  // ngAfterViewInit(){ console.log("child ngAfterViewInit") }
  // ngAfterViewChecked(){ console.log("child ngAfterViewChecked") }
  // ngOnDestroy(){  console.log("child ngOnDestroy") }
}
