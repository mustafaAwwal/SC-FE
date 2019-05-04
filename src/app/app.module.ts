import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing';


import { AppComponent } from './app.component';

//Normal Pages
import { LandingPageComponent } from './Components/Pages/landing-page/landing-page.component';
import { SignupComponent } from './Components/Pages/signup/signup.component';
import { LoginComponent } from './Components/Pages/login/login.component';

//UI components
import { HeaderComponent } from './Components/UI/header/header.component';


//Profile Pages
import { ProfileMainComponent } from './Components/profile-pages/profile-main/profile-main.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    HeaderComponent,
    SignupComponent,
    LoginComponent,
    ProfileMainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
