import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesModule } from './pages/pages.module';
import { HealthTrackModule } from './health-track/health-track.module';
import { ExpenseTrackComponent } from './expense-track/expense-track.component';

@NgModule({
  imports: [
    CommonModule,
    PagesModule,
    HealthTrackModule
  ],
  declarations: [
    ExpenseTrackComponent
  ]
})
export class RoutesModule { }
