import { Component } from '@angular/core';
import { BlogService } from '../../../../providers/services/blog.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-showall',
  templateUrl: './showall.component.html',
  styleUrl: './showall.component.css'
})
export class ShowallComponent {
  allBlog:any = []
  myDate = new Date()
  hasErrro = ""
  isLoaded = false
  constructor( private _blog: BlogService, private _roue:Router){}
  ngOnInit(){
    this._blog.getAllBlogs().subscribe(
      (res:any) => {
        this.allBlog= res.data
      },
      (e) => {
        this.isLoaded=true
        this.hasErrro = e.error.message
        this._roue.navigate(["/errr"])
        this._roue.navigateByUrl("/errr")
      },
      ()=>{
        this.isLoaded=true
      }
    )
  }
  ngOnDestroy(){}
}
