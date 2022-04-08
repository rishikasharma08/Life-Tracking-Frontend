import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './routes/pages/home/home.component';
import { SleepTrackComponent } from './routes/health-track/sleep-track/sleep-track.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'sleep', component: SleepTrackComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
