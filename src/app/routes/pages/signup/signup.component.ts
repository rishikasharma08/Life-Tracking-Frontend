import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { MainserviceService } from 'src/app/core/services/mainservice.service';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {


  // newTaskForm: FormGroup;

  constructor(private service: MainserviceService) { }

  ngOnInit(): void {
  }
  registerForm = new FormGroup({
    username: new FormControl(""),
    email: new FormControl(""),
    contact: new FormControl(""),
    gender: new FormControl(""),
  });


  profileForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
  });

  registerSubmited() {
    console.log(this.registerForm.value);

    
    let body = {
      email: "rishikasharma7816@gmail.com",
      password: "Rsh7816@"
    }

    this.service.api(body, `life_tracking/login_user`, 200, 'post')
      .subscribe((res) => {
        console.log(res);
      })


  }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.profileForm.value);
  }
}
