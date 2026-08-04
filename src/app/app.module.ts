import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms'; // <-- add this

// 1. Import the AngularFire modules
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';

import { environment } from '../environments/environment';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { AboutComponent } from './components/about/about.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { SkillsComponent } from './components/skills/skills.component';
import { SoftSkillsComponent } from './components/soft-skills/soft-skills.component';
import { LanguagesComponent } from './components/languages/languages.component';
import { ContactComponent } from './components/contact/contact.component';
import { LoginComponent } from './components/login/login.component';
import { AdminComponent } from './components/admin/admin.component';
import { QRCodeModule } from 'angularx-qrcode';

@NgModule({
  declarations: [
    LoginComponent,
    AppComponent,
    HeaderComponent,
    AboutComponent,
    ExperienceComponent,
    ProjectsComponent,
    SkillsComponent,
    SoftSkillsComponent,
    LanguagesComponent,
    ContactComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    QRCodeModule,
    // 3. Initialize Firebase
    // NOTE: Use .initializeApp() with your config
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule, // For database
    AngularFireAuthModule   // For authentication

    // Firebase Modules
 
  ],
  providers: [ 
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
