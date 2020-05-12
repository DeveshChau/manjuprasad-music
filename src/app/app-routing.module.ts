import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { PracticeVideoComponent } from './users/practice-video/practice-video.component';
import { SignUpComponent } from './auth/sign-up/sign-up.component';
import { SignInComponent } from './auth/sign-in/sign-in.component';
import { AttendanceComponent } from './users/attendance/attendance.component';


const routes: Routes = [
  { path: 'admin', component: AdminComponent },
  { path: 'practiceVideos', component: PracticeVideoComponent },
  { path: 'signUp', component: SignUpComponent },
  { path: 'signIn', component: SignInComponent },
  { path: 'attendance', component: AttendanceComponent },
  { path: '', redirectTo: '/attendance', pathMatch: 'full' },
  { path: '**', component: AdminComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
