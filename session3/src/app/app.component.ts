import { Component } from '@angular/core';
import { Todo } from './models/todo';
import { GlobalService } from './services/global.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  constructor(public _global: GlobalService){

  }

  // title = 'session3';
  // imgSrc = 'images.jpg'
  // myHtml="<p>hello<strong> All</strong></p>"
  // show(){
  //   return "show"
  // }
  // hello(){
  //   alert("hello")
  //   console.log("test");
  // }

  // val:string="marwa"
  // getData(event:any){
  //   console.log(event.target.value)
  //   this.val = event.target.value
  // }

  data : Todo[] = [
    {
    userId: 1,
    id: 1,
    title: "delectus aut autem",
    completed: false
    },
    {
    userId: 1,
    id: 2,
    title: "quis ut nam facilis et officia qui",
    completed: false
    },
    {
    userId: 1,
    id: 3,
    title: "fugiat veniam minus",
    completed: false
    },
    {
    userId: 1,
    id: 4,
    title: "et porro tempora",
    completed: true
    },
    {
    userId: 1,
    id: 5,
    title: "laboriosam mollitia et enim quasi adipisci quia provident illum",
    completed: false
    },
    {
    userId: 1,
    id: 6,
    title: "qui ullam ratione quibusdam voluptatem quia omnis",
    completed: false
    },
    {
    userId: 1,
    id: 7,
    title: "illo expedita consequatur quia in",
    completed: false
    },
    {
    userId: 1,
    id: 8,
    title: "quo adipisci enim quam ut ab",
    completed: true
    },
    {
    userId: 1,
    id: 9,
    title: "molestiae perspiciatis ipsa",
    completed: false
    },
    {
    userId: 1,
    id: 10,
    title: "illo est ratione doloremque quia maiores aut",
    completed: true
    }
    ]

    isA=false
    isB=false
    isC=false
    inT = "password"
    showHide="show"
    chngType(){
      console.log(this.inT)
      if(this.inT == "password"){
        this.inT="text"
        this.showHide="hide"
      }
      else{
          this.inT="password"
          this.showHide="show"
      }
          // this.inT == "password" ? this.inT="text" : this.inT="password"
    }
}
