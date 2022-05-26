import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SleepTrackComponent } from './sleep-track/sleep-track.component';
import { DietTrackComponent } from './diet-track/diet-track.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { WaterTrackComponent } from './water-track/water-track.component';


@NgModule({
  declarations: [
    SleepTrackComponent,
    DietTrackComponent,
    WaterTrackComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class HealthTrackModule { }
