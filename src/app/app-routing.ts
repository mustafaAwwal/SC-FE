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

const routes : Routes = [
    {path: '', component: LandingPageComponent},
    {path: 'signup', component: SignupComponent},
    {path: 'login', component: LoginComponent},

    {path: 'teacher', children: [
        {path: 'main', component: ProfileMainComponent},
        {path: 'medialibrary', component: MediaLibraryComponent}
    ]},
    {path: 'admin', component: AdminPanelComponent}
]

@NgModule ({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    providers: []
})

export class AppRoutingModule {

}