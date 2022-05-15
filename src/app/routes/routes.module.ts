import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesModule } from './pages/pages.module';
import { HealthTrackModule } from './health-track/health-track.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    PagesModule,
    HealthTrackModule
  ]
})
export class RoutesModule { }
