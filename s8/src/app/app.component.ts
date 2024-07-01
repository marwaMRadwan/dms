import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 's8';
  options :any= [
    {id: 34, description: 'Adding new'},
    {id: 34, description: ' item'},
    {id: 34, description: 'new'}
  ]  
  modelVar=[]
  config:any = {
    displayFn:(item: any) => { return item.description; } ,
    displayKey:"description", 
    search:true ,
    height: 'auto' ,
    placeholder:'Select', 
    customComparator: ()=>{}, 
    limitTo: 0, 
    moreText: 'more', 
    noResultsFound: 'No results found!', 
    searchPlaceholder:'Search', 
    searchOnKey: 'description', 
    clearOnSelection: false, 
    inputDirection: 'ltr', 
    selectAllLabel: 'Select all', 
    enableSelectAll: true, 
  }

  constructor(){
  }
}
