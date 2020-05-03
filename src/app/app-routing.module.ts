import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { PracticeVideoComponent } from './users/practice-video/practice-video.component';


const routes: Routes = [
  { path: 'admin', component: AdminComponent },
  { path: 'practiceVideos', component: PracticeVideoComponent },
  { path: '', redirectTo: '/admin', pathMatch: 'full' },
  { path: '**', component: AdminComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
