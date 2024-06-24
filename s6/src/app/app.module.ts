import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { DirectivesComponent } from './components/directives/directives.component';
import { TempConvertPipe } from './pipes/temp-convert.pipe';
import { LoginComponent } from './components/login/login.component';
import { userInterceptor } from './providers/interceptors/user.interceptor';
import { HomeComponent } from './components/home/home.component';
import { ProfileComponent } from './components/profile/profile.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    DirectivesComponent,
    TempConvertPipe,
    LoginComponent,
    HomeComponent,
    ProfileComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    provideHttpClient(
      withInterceptors([userInterceptor])
    )
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
