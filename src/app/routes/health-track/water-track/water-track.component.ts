import { Component, OnInit } from '@angular/core';
import { MainserviceService } from 'src/app/core/services/mainservice.service';

@Component({
  selector: 'app-water-track',
  templateUrl: './water-track.component.html',
  styleUrls: ['./water-track.component.scss']
})
export class WaterTrackComponent implements OnInit {

  constructor(private service: MainserviceService) { }

  ngOnInit(): void {
  }
  logout() {
    this.service.logout();
  }
}
