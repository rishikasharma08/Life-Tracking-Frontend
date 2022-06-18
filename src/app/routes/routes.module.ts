import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesModule } from './pages/pages.module';
import { HealthTrackModule } from './health-track/health-track.module';
import { ExpenseTrackComponent } from './expense-track/expense-track.component';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    PagesModule,
    HealthTrackModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    ExpenseTrackComponent
  ]
})
export class RoutesModule { }
