import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { LoginComponent } from './components/pages/auth/login/login.component';
import { RegisterComponent } from './components/pages/auth/register/register.component';
import { ShowallComponent } from './components/pages/blog/showall/showall.component';
import { SingleComponent } from './components/pages/blog/single/single.component';
import { EditComponent } from './components/pages/blog/edit/edit.component';
import { Err404Component } from './components/pages/err404/err404.component';

const routes: Routes = [
  // {path:"", redirectTo:"/auth/login", pathMatch: 'full'},
  // {path:"auth", children:[
  //   {path:"login", component:LoginComponent, title:"My App | Login"},
  //   {path:"register", component:RegisterComponent, title:"My App | Register"},
  // ]},
  {path:"", component:ShowallComponent,title:"My App"},
  {path:"blog", children:[
    {path:"", component:ShowallComponent, title: "show all"},
    {path:"edit/:id", component:EditComponent},
    {path:":id",component:SingleComponent},
  ]},
  {path:"**", component:Err404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
