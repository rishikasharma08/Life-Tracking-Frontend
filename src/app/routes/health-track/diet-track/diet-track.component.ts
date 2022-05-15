import { Component, OnInit } from '@angular/core';
import { MainserviceService } from 'src/app/core/services/mainservice.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-diet-track',
  templateUrl: './diet-track.component.html',
  styleUrls: ['./diet-track.component.scss']
})
export class DietTrackComponent implements OnInit {

  constructor(private service: MainserviceService) { }

  ngOnInit(): void {
  }
  caloriesForm = new FormGroup({
    meal: new FormControl(""),
    calories: new FormControl("")
  });
  logout() {
    this.service.logout();
  }
  submitCalories() {
    console.log("HELLLO");
  }
}
