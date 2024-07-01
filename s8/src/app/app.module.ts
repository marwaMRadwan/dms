import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SelectDropDownModule } from 'ngx-select-dropdown'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormWithValidationComponent } from './components/form-with-validation/form-with-validation.component';
import { TestCountriesComponent } from './test-countries/test-countries.component';
import { provideHttpClient } from '@angular/common/http';
import { MycompComponent } from './mycomp/mycomp.component';
import { StoreModule } from '@ngrx/store';

import { counterReducer } from './counter.reducer';
import { MyCounterComponent } from './my-counter/my-counter.component';
import { ExcelExampleComponent } from './excel-example/excel-example.component';
import { FilesComponent } from './files/files.component';


@NgModule({
  declarations: [
    AppComponent,
    FormWithValidationComponent,
    TestCountriesComponent,
    MycompComponent,
    MyCounterComponent,
    ExcelExampleComponent,
    FilesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SelectDropDownModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forRoot({ count: counterReducer })
  ],
  providers: [provideHttpClient()],
  bootstrap: [AppComponent]
})
export class AppModule { }
