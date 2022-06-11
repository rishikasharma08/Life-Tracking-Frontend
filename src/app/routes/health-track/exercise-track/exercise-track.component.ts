import { Component, OnInit } from '@angular/core';
import { MainserviceService } from 'src/app/core/services/mainservice.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-exercise-track',
  templateUrl: './exercise-track.component.html',
  styleUrls: ['./exercise-track.component.scss']
})
export class ExerciseTrackComponent implements OnInit {

  workout: any;
  work_id: any;
  ifOptions: boolean = true;
  work_days: any;
  days_array: any = [];
  yesMon: boolean = false;
  yesTues: boolean = false;
  yesWed: boolean = false;
  yesThur: boolean = false;
  yesFri: boolean = false;
  yesSat: boolean = false;
  Monday: any;
  Tuesday: any;
  Saturday: any;
  Friday: any;
  Thursday: any;
  Wednesday: any;
  user_id: string | null;
  constructor(private service: MainserviceService) { }

  ngOnInit(): void {
    this.user_id = localStorage.getItem('userId');
  }
  logout() {
    this.service.logout();
  }

  getWorkout(id: any) {
    this.work_id = id;
    this.service.api({ work_id: id }, `life_tracking/getWorkouts`, 200, 'post')
      .subscribe((res) => {
        if (res.error == 0) {
          this.work_days = res.data[0].work_days;
          this.workout = res.workout;
          this.chooseAgain();
        }
        else {
          this.service.customPopups(res.msg, 1);
        }
      })
  }

  chooseAgain() {
    this.ifOptions = !this.ifOptions;
    this.yesMon = false;
    this.yesTues = false;
    this.yesWed = false;
    this.yesThur = false;
    this.yesFri = false;
    this.yesSat = false;

    let i = 0;
    if (this.work_days.includes('1')) {
      this.days_array.push("Monday");
      this.yesMon = true;
      this.Monday = this.workout[i].Monday;
      i++;
    }
    if (this.work_days.includes('2')) {
      this.days_array.push("Tuesday");
      this.yesTues = true;
      this.Tuesday = this.workout[i].Tuesday;
      i++;
    }
    if (this.work_days.includes('3')) {
      this.days_array.push("Wednesday");
      this.yesWed = true;
      this.Wednesday = this.workout[i].Wednesday;
      i++;
    }
    if (this.work_days.includes('4')) {
      this.days_array.push("Thursday");
      this.yesThur = true;
      this.Thursday = this.workout[i].Thursday;
      i++;
    }
    if (this.work_days.includes('5')) {
      this.days_array.push("Friday");
      this.yesFri = true;
      this.Friday = this.workout[i].Friday;
      i++;
    }
    if (this.work_days.includes('6')) {
      this.days_array.push("Saturday");
      this.yesSat = true;
      this.Saturday = this.workout[i].Saturday;
      i++;
    }
  }

  selectWorkout() {
    this.service.api({ work_id: this.work_id, user_id: this.user_id }, `life_tracking/selectWorkout`, 200, 'post')
      .subscribe((res) => {
        if (res.error == 0) {

          this.service.customPopups(res.msg, 0);
        }
        else {
          this.service.customPopups(res.msg, 1);
        }
      })
  }
}