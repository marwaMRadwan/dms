import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { ProfileComponent } from './components/profile/profile.component';
import { isloggedGuard } from './providers/guards/islogged.guard';

const routes: Routes = [
  {path:"", component:HomeComponent, title:"Home page"},
  {path:"login", component:LoginComponent, title:"Login page", canActivate:[isloggedGuard]},
  {path:"profile", component:ProfileComponent, title:"Profile page"},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
