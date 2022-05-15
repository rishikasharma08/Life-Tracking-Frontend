import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModalModule, BsModalService } from 'ngx-bootstrap/modal';
import { BsDatepickerModule, BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    SignupComponent,
    HomeComponent
  ],
  providers: [BsModalService],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ModalModule,
    RouterModule
    // BsModalService
    // SharedModule,
    
  ]
})
export class PagesModule { }
