import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlogService } from '../../../../providers/services/blog.service';

@Component({
  selector: 'app-single',
  templateUrl: './single.component.html',
  styleUrl: './single.component.css'
})
export class SingleComponent {
  id:any
  constructor(private _activated:ActivatedRoute, private _blog:BlogService){
    // this.id = _activated.snapshot.params['id']
    this.id = _activated.snapshot.paramMap.get("id")
    // console.log(this.id)
    // console.log( _activated.snapshot.queryParams )
    this._blog.getSingleBlog(this.id).subscribe(
      (res)=>{console.log(res)},
      (err)=>{console.log("fee error")},
      ()=>{console.log("finished")}
    )
  }
}
