import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './routes/pages/home/home.component';
import { SleepTrackComponent } from './routes/health-track/sleep-track/sleep-track.component';
import { SignupComponent } from './routes/pages/signup/signup.component';
import { DietTrackComponent } from './routes/health-track/diet-track/diet-track.component';
import { UserProfileComponent } from './routes/pages/user-profile/user-profile.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'sleep', component: SleepTrackComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'diet', component: DietTrackComponent},
  {path: 'profile', component: UserProfileComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
