import { Component, OnInit } from '@angular/core';
import { MainserviceService } from 'src/app/core/services/mainservice.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-diet-track',
  templateUrl: './diet-track.component.html',
  styleUrls: ['./diet-track.component.scss']
})
export class DietTrackComponent implements OnInit {
  user_id: any;
  dietData: any;

  constructor(private service: MainserviceService) { }

  ngOnInit(): void {
    this.user_id = localStorage.getItem('userId');
    this.getDietData();
  }
  caloriesForm = new FormGroup({
    meal: new FormControl(""),
    calories: new FormControl("")
  });

  getDietData() {
    this.service.api({ user_id: this.user_id }, `life_tracking/get_all_diet`, 200, 'post')
      .subscribe((res) => {
        if (res.error == 0) {
          this.dietData = res.data;
        }
        else {
          this.service.customPopups(res.msg, 1);
        }
      })
  }

  logout() {
    this.service.logout();
  }
  submitCalories() {
    let body = {
      meal: this.caloriesForm.value.meal,
      calories: Number(this.caloriesForm.value.calories),
      user_id: this.user_id
    }
    if ((body && body.meal && body.meal.length == 0) || (this.caloriesForm.value.calories.length == 0)) {
      this.service.customPopups("Please Fill details first", 1);
    }
    else {
      this.service.api(body, `life_tracking/user_diet`, 200, 'post')
        .subscribe((res) => {
          if (res.error == 0) {
            console.log(res);
            this.service.customPopups(res.msg, 0);
            this.getDietData();
            this.resetItems();
          }
          else {
            this.service.customPopups(res.msg, 1);
          }
        })
    }
  }
  resetItems() {
    this.caloriesForm.value.calories = '';
    this.caloriesForm.value.meal = '';
  }
}