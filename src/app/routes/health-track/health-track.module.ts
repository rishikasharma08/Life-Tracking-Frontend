import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SleepTrackComponent } from './sleep-track/sleep-track.component';
import { DietTrackComponent } from './diet-track/diet-track.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    SleepTrackComponent,
    DietTrackComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class HealthTrackModule { }
