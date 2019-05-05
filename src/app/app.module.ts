import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing';
import * as  cloudinary from 'cloudinary-core';
import cloudinaryConfiguration from '../environments/config';
import {Cloudinary,CloudinaryModule, CloudinaryConfiguration, provideCloudinary} from '@cloudinary/angular-5.x';
import {FileUploadModule} from 'ng2-file-upload';
import { HttpClientModule } from '@angular/common/http';
import { DataServicesService } from '../services/dataservices/data-services.service';



import { AppComponent } from './app.component';

//Normal Pages
import { LandingPageComponent } from './Components/Pages/landing-page/landing-page.component';
import { SignupComponent } from './Components/Pages/signup/signup.component';
import { LoginComponent } from './Components/Pages/login/login.component';

//UI components
import { HeaderComponent } from './Components/UI/header/header.component';


//Profile Pages
import { ProfileMainComponent } from './Components/profile-pages/profile-main/profile-main.component';
import { MediaLibraryComponent } from './Components/profile-pages/media-library/media-library.component';
import { VideoCardComponent } from './Components/reusableComponent/video-card/video-card.component';
import { FileUploaderComponent } from './Components/reusableComponent/file-uploader/file-uploader.component';
import { AdminPanelComponent } from './Components/profile-pages/admin-panel/admin-panel.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    HeaderComponent,
    SignupComponent,
    LoginComponent,
    ProfileMainComponent,
    MediaLibraryComponent,
    VideoCardComponent,
    FileUploaderComponent,
    AdminPanelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CloudinaryModule.forRoot(cloudinary, cloudinaryConfiguration as CloudinaryConfiguration),
    FileUploadModule,
    HttpClientModule,

    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
