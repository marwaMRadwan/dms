import { Component } from '@angular/core';
import { GlobalService } from './service/global.service';
import {TranslateService} from '@ngx-translate/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CountryISO, PhoneNumberFormat, SearchCountryField } from 'ngx-intl-tel-input';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
//   title = 's7';
//   param = {value: 'world'};
//   langs = [
//     {code:"en", direc: "ltr"},
//     {code:"ar", direc: "rtl"}
//   ]
//   // constructor(public _global:GlobalService){}
//   constructor(public translate: TranslateService, public _global:GlobalService) {
//     // this language will be used as a fallback when a translation isn't found in the current language
// this._global.setLang("ar")
//     translate.setDefaultLang('ar');

//      // the lang to use, if the lang isn't available, it will use the current loader to get them
//     translate.use('ar');
// }

// langChange(code:string){
//   this.translate.setDefaultLang(code);

//   // the lang to use, if the lang isn't available, it will use the current loader to get them
//  this.translate.use(code);
//  this._global.setLang(code)


// }
//   // async ngOnInit(){    
//   //   const position: any = await this._global.getCurrentLocation();
//   //  console.log(position);
//   // // this._global.getCurrentLocation()
//   // }
//   separateDialCode = false;
// 	SearchCountryField = SearchCountryField;
// 	CountryISO = CountryISO;
// 	PhoneNumberFormat = PhoneNumberFormat;
// 	preferredCountries: CountryISO[] = [
// 		CountryISO.Egypt,
// 		CountryISO.India,
// 	];
// 	phoneForm = new FormGroup({
// 		phone: new FormControl(undefined, [Validators.required]),
// 	});

// 	changePreferredCountries() {
// 		this.preferredCountries = [CountryISO.Egypt, CountryISO.Canada];
// 	}
//   addMe(){
//     console.log(this.phoneForm.value)
//   }
}
