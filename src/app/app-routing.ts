import {Routes , RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

//Pages 
import { LandingPageComponent } from './Components/Pages/landing-page/landing-page.component';
import { LoginComponent} from './Components/Pages/login/login.component';
import { SignupComponent } from './Components/Pages/signup/signup.component';

//Profile Pages
import { ProfileMainComponent } from './Components/profile-pages/profile-main/profile-main.component';
import { MediaLibraryComponent } from './Components/profile-pages/media-library/media-library.component';
import { AdminPanelComponent} from './Components/profile-pages/admin-panel/admin-panel.component';

//Auth guard service
import { AuthguardService } from '../services/authguard/authguard.service';

const routes : Routes = [
    {path: '', component: LandingPageComponent},
    {path: 'signup', component: SignupComponent},
    {path: 'login', component: LoginComponent},

    {path: 'teacher', children: [
        {path: 'main', component: ProfileMainComponent, canActivate: [AuthguardService]},
        {path: 'medialibrary', component: MediaLibraryComponent, canActivate: [AuthguardService]}
    ], canActivate: [AuthguardService]},
    {path: 'admin', component: AdminPanelComponent, canActivate: [AuthguardService]}
]

@NgModule ({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    providers: []
})

export class AppRoutingModule {

}