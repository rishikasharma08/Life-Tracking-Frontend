import { Component, OnInit } from '@angular/core';
import { MainserviceService } from 'src/app/core/services/mainservice.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-exercise-track',
  templateUrl: './exercise-track.component.html',
  styleUrls: ['./exercise-track.component.scss']
})
export class ExerciseTrackComponent implements OnInit {

  constructor(private service: MainserviceService) { }

  ngOnInit(): void {
    
  }
  logout() {
    this.service.logout();
  }
}
 
