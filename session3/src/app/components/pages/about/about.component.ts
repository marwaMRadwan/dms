import { Component } from '@angular/core';
import { GlobalService } from '../../../services/global.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  constructor(public _global:GlobalService){
    _global.hasNav=false
  }
  ngOnDestroy(){
    this._global.hasNav=true
  }
}
