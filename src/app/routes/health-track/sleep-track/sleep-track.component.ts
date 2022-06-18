import { Component, OnInit } from '@angular/core';
import { MainserviceService } from 'src/app/core/services/mainservice.service';
import { FormGroup, FormControl } from '@angular/forms';


@Component({
  selector: 'app-sleep-track',
  templateUrl: './sleep-track.component.html',
  styleUrls: ['./sleep-track.component.scss']
})
export class SleepTrackComponent implements OnInit {
  wakeup_time: any;
  sleep_time: any;
  user_id: any;
  constructor(private service: MainserviceService) { }

  ngOnInit(): void {
    this.user_id = localStorage.getItem('userId');
    // this.sleep_music = this.sleep_music.toString();
  }

  addSleep() {
    console.log(this.sleep_time);

    var timeStart = new Date("01/01/2007 " + this.wakeup_time).getHours();
    var timeEnd = new Date("01/01/2007 " + this.sleep_time).getHours();

    var hourDiff = timeEnd - timeStart;

    console.log(hourDiff);


    let body = {
      user_id: this.user_id,
      sleep_time: this.sleep_time,
      wakeup_time: this.wakeup_time,
      actual_sleep_hours: hourDiff
    }
    this.service.api(body, `life_tracking/user_sleep`, 200, 'post')
      .subscribe((res) => {
        console.log(res);
        if (res.error == 0) {
          this.service.customPopups(res.msg, 0);
        }
        else {
          this.service.customPopups(res.msg, 1);
        }
      })
  }

  logout() {
    this.service.logout();
  }
}
