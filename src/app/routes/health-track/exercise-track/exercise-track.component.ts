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
  today: any;
  ifOptions: boolean = true;
  selectedOption: boolean = false;
  work_days: any;
  days_array: any = [];
  yesMon: boolean = false;
  yesTues: boolean = false;
  yesWed: boolean = false;
  yesThur: boolean = false;
  yesFri: boolean = false;
  yesSat: boolean = false;
  getselectWorkout: boolean = false;
  msg: boolean = false;
  Monday: any;
  Tuesday: any;
  Saturday: any;
  Friday: any;
  Thursday: any;
  Wednesday: any;
  user_id: string | null;
  todayWorkout: any;
  work_days_are: any;
  final_todays_work: any = [];
  final_msg: any;
  constructor(private service: MainserviceService) { }

  ngOnInit(): void {
    this.user_id = localStorage.getItem('userId');
    this.getWorkoutIf();
  }
  logout() {
    this.service.logout();
  }

  getWorkoutIf() {
    let today = new Date();
    today.setDate(today.getDate() - 1)
    this.service.api({ user_id: this.user_id, today_date: today }, `life_tracking/getselectWorkout`, 200, 'post')
      .subscribe((res) => {
        if (res.error == 0) {
          this.ifOptions = false;
          this.selectedOption = true;
          let today = new Date();
          let today_int = today.getDay();
          let Whattoday = new Intl.DateTimeFormat('en-US', { weekday: 'long' }).format(today);
          this.todayWorkout = res.workout;
          this.work_days_are = res.data[0].work_days;
          this.work_days_are.toString();
          this.showTodaysWork(1);
          if (this.work_days_are.includes(today_int)) {
            this.msg = false;
          }
          else {
            this.msg = true;
          }
        }
        else if (res.msg == 'You are done with your workout') {
          console.log("asass");
          this.msg = true;
          this.getselectWorkout = true;
          this.ifOptions = false;
        }
        else {
          this.ifOptions = true;
        }
      })
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
          this.ifOptions = false;
          this.selectedOption = true;
          this.service.customPopups(res.msg, 0);
          this.showTodays();
        }
        else {
          this.service.customPopups(res.msg, 1);
        }
      })
  }

  showTodays() {
    let today = new Date();
    this.today = new Intl.DateTimeFormat('en-US', { weekday: 'long' }).format(today)
    this.getWorkoutIf();
  }


  showTodaysWork(val: any) {
    for (let i = 0; i < this.todayWorkout.length; i++) {
      if (val == 1) {
        this.final_todays_work = this.todayWorkout[i].Monday;
        if (this.final_todays_work != undefined) {
          // console.log(val, "INSIDEN");
          // console.log(this.final_todays_work, "---123");
          break;
        }
        else {
          continue;
        }
      }
      if (val == 2) {
        this.final_todays_work = this.todayWorkout[i].Tuesday;
        if (this.final_todays_work != undefined) {
          console.log(val, "INSIDEN");
          console.log(this.final_todays_work, "---123");
          break;
        }
        else {
          continue;
        }
      }
      if (val == 3) {
        this.final_todays_work = this.todayWorkout[i].Wednesday;
        if (this.final_todays_work != undefined) {
          console.log(val, "INSIDEN");
          console.log(this.final_todays_work, "---123");
          break;
        }
        else {
          continue;
        }
      }
      if (val == 4) {
        this.final_todays_work = this.todayWorkout[i].Thursday;
        if (this.final_todays_work != undefined) {
          console.log(val, "INSIDEN");
          console.log(this.final_todays_work, "---123");
          break;
        }
        else {
          continue;
        }
      }
      if (val == 5) {
        this.final_todays_work = this.todayWorkout[i].Friday;
        if (this.final_todays_work != undefined) {
          console.log(val, "INSIDEN");
          console.log(this.final_todays_work, "---123");
          break;
        }
        else {
          continue;
        }
      }
      if (val == 6) {
        this.final_todays_work = this.todayWorkout[i].Saturday;
        if (this.final_todays_work != undefined) {
          // console.log(val, "INSIDEN");
          // console.log(this.final_todays_work, "---123");
          break;
        }
        else {
          continue;
        }
      }
      else {
        this.final_todays_work = this.todayWorkout[i].Sunday;
        if (this.final_todays_work != undefined) {
          // console.log(val, "INSIDEN");
          // console.log(this.final_todays_work, "---123");
          break;
        }
        else {
          continue;
        }
      }
    }
  }

  doneWithToday() {
    this.service.api({ user_id: this.user_id }, `life_tracking/DonewithtWorkout`, 200, 'post')
      .subscribe((res) => {
        if (res.error == 0) {
          console.log(res, "---123");
          this.getWorkoutIf();
          this.service.customPopups(res.msg, 0);
        }
        else {
          this.service.customPopups(res.msg, 1);
        }
      })
  }
}