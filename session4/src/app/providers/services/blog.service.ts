import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  baseUrl = "http://dms.techs-experts.net/api/"
  constructor(private _http:HttpClient) { }

  getAllBlogs(){
    return this._http.get(`${this.baseUrl}blogs`)
  }
  getSingleBlog(id:string){
    return this._http.get(`${this.baseUrl}blogs/${id}`)
  }
  addBlog(data:any){
    return this._http.post(`${this.baseUrl}blogs`, data)
  }
  editBlog(id:string, data:any){
    return this._http.post(`${this.baseUrl}blogs/${id}`, data)
  }
  deleteBlog(id:string){
    return this._http.delete(`${this.baseUrl}blogs/${id}`)
  }

}
