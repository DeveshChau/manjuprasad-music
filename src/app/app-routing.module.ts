import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { PracticeVideoComponent } from './users/practice-video/practice-video.component';
import { SignUpComponent } from './auth/sign-up/sign-up.component';
import { SignInComponent } from './auth/sign-in/sign-in.component';


const routes: Routes = [
  { path: 'admin', component: AdminComponent },
  { path: 'practiceVideos', component: PracticeVideoComponent },
  { path: 'signUp', component: SignUpComponent },
  { path: 'signIn', component: SignInComponent },
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: '**', component: AdminComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
