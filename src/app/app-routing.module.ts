import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './routes/pages/home/home.component';
import { SleepTrackComponent } from './routes/health-track/sleep-track/sleep-track.component';
import { SignupComponent } from './routes/pages/signup/signup.component';
import { DietTrackComponent } from './routes/health-track/diet-track/diet-track.component';
import { UserProfileComponent } from './routes/pages/user-profile/user-profile.component';
import { WaterTrackComponent } from './routes/health-track/water-track/water-track.component';
import { ExerciseTrackComponent } from './routes/health-track/exercise-track/exercise-track.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'sleep', component: SleepTrackComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'diet', component: DietTrackComponent},
  {path: 'water', component: WaterTrackComponent},
  {path: 'exercise', component: ExerciseTrackComponent},
  {path: 'profile', component: UserProfileComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
