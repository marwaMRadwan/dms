import { Component } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-test-countries',
  templateUrl: './test-countries.component.html',
  styleUrl: './test-countries.component.css'
})
export class TestCountriesComponent {

  countries :any = []
  states : any = []
  selectedCountry : any = null
  constructor(private _data:DataService){

  }
  ngOnInit(){
    this.getCountries()
  }
  getCountries(){
    this._data.getCountries().subscribe({
      next:(data:any)=>{
        this.countries = data.data.countries
        console.log(this.countries)
      },
      error: (err:any)=>{
        console.log(err)
      }
  })
  }
  changeCountry(){
    this.getStates(this.selectedCountry)
  }
  getStates(id:number){
    this.states=[]
    if(this.selectedCountry){
      this._data.getStates(id).subscribe({
        next:(data:any)=>{
          console.log(data)
          this.states = data.data.states
        },
        error: (err:any)=>{
          console.log(err)
        }
    })
    }
  }
}
