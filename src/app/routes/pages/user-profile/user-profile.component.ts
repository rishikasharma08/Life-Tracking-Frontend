import { Component, OnInit } from '@angular/core';
import { MainserviceService } from 'src/app/core/services/mainservice.service';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators
} from '@angular/forms';
import Validation from './utils/validation';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {

  userData: any;
  user_id: any;
  dummyImg: any;

  constructor(private service: MainserviceService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.user_id = localStorage.getItem('userId')
    this.service.getUserInfo(this.user_id)
    this.service.userInfo.subscribe((data) => {
      this.userData = data;
      console.log(this.userData, "this.userData");
    })



  }


}
