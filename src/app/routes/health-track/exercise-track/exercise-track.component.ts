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
  constructor(private service: MainserviceService) { }

  ngOnInit(): void {

  }
  logout() {
    this.service.logout();
  }

  getWorkout(id: any) {
    this.service.api({ work_id: id }, `life_tracking/getWorkouts`, 200, 'post')
      .subscribe((res) => {
        if (res.error == 0) {
          this.workout = res.workout;
          console.log(this.workout);
          
        }
        else {
          this.service.customPopups(res.msg, 1);
        }
      })
  }
}

