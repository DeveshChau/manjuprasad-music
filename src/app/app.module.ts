import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AngularFireModule } from '@angular/fire';

import { MaterialModule } from './material/material.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { PracticeVideoComponent } from './users/practice-video/practice-video.component';
import { HeaderComponent } from './shared/header/header.component';
import { SignUpComponent } from './auth/sign-up/sign-up.component';
import { SignInComponent } from './auth/sign-in/sign-in.component';
import { environment } from 'src/environments/environment';
import { QuotesComponent } from './shared/quotes/quotes.component';
import { AttendanceComponent } from './users/attendance/attendance.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    PracticeVideoComponent,
    HeaderComponent,
    SignUpComponent,
    SignInComponent,
    QuotesComponent,
    AttendanceComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    MaterialModule,
    AppRoutingModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
