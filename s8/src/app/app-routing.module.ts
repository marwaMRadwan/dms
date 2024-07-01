import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormWithValidationComponent } from './components/form-with-validation/form-with-validation.component';
import { TestCountriesComponent } from './test-countries/test-countries.component';
import { MycompComponent } from './mycomp/mycomp.component';

const routes: Routes = [
  {path:"form", component: FormWithValidationComponent},
  {path:"conuntries", component: TestCountriesComponent},
  {path:"mycomp", component:MycompComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
