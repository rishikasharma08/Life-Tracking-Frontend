import { Component, OnInit } from '@angular/core';
import { MainserviceService } from 'src/app/core/services/mainservice.service';

@Component({
  selector: 'app-water-track',
  templateUrl: './water-track.component.html',
  styleUrls: ['./water-track.component.scss']
})
export class WaterTrackComponent implements OnInit {

  waterData: any;
  user_id: any;
  percentage: any;
  constructor(private service: MainserviceService) { }

  ngOnInit(): void {
    this.getWaterData();
  }

  getWaterData() {
    this.user_id = localStorage.getItem('userId');
    this.service.api({ user_id: this.user_id }, `life_tracking/get_water_data`, 200, 'post')
      .subscribe((res) => {
        if (res.error == 0) {
          this.waterData = res.data;
          this.percentage = (this.waterData[0].intake_glasses / this.waterData[0].required_glasses) * 100;
        }
        else {
          this.service.customPopups(res.msg, 1);
        }
      })
  }
  logout() {
    this.service.logout();
  }

  drunkWater() {
    this.service.api({ user_id: this.user_id }, `life_tracking/update_water_data`, 200, 'post')
      .subscribe((res) => {
        if (res.error == 0) {

          this.service.customPopups(res.msg, 0);
          this.getWaterData();
        }
        else {
          this.service.customPopups(res.msg, 1);
        }
      })
  }
}
