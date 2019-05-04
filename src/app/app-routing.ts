import {Routes , RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

//Pages 
import { LandingPageComponent } from './Components/Pages/landing-page/landing-page.component';
import { LoginComponent} from './Components/Pages/login/login.component';
import { SignupComponent } from './Components/Pages/signup/signup.component';

//Profile Pages
import { ProfileMainComponent } from './Components/profile-pages/profile-main/profile-main.component';


const routes : Routes = [
    {path: '', component: LandingPageComponent},
    {path: 'signup', component: SignupComponent},
    {path: 'login', component: LoginComponent},

    {path: 'profile', children: [
        {path: 'main', component: ProfileMainComponent}
    ]}
]

@NgModule ({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    providers: []
})

export class AppRoutingModule {

}