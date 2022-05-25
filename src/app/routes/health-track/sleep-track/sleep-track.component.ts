import { Component, OnInit } from '@angular/core';
import { MainserviceService } from 'src/app/core/services/mainservice.service';
import { FormGroup, FormControl } from '@angular/forms';


@Component({
  selector: 'app-sleep-track',
  templateUrl: './sleep-track.component.html',
  styleUrls: ['./sleep-track.component.scss']
})
export class SleepTrackComponent implements OnInit {
    constructor(private service: MainserviceService) { }

  ngOnInit(): void {
  }
  logout() {
    this.service.logout();
  }
  // submitCalories() {
  //   console.log("HELLLO");
  // }
}
