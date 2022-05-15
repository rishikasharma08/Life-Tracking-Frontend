import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { FormGroup, FormControl } from '@angular/forms';
import { MainserviceService } from 'src/app/core/services/mainservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  showSign: boolean = true;
  postHealth: any = 0;
  postWealth: any = 0;

  @ViewChild('healthModal') public healthModal: any;

  healthTrackForm = new FormGroup({
    profession: new FormControl(""),
    job_hours: new FormControl(""),
    job_type: new FormControl(""),
    age: new FormControl(""),
    weight: new FormControl(""),
    height: new FormControl(""),
    goal: new FormControl("")
  });


  showMain: boolean = true;
  showWealth: boolean = false;
  showHealth: boolean = false;
  modalRef?: BsModalRef;
  token: any;
  constructor(private modalService: BsModalService, private service: MainserviceService, private route: Router) { }

  ngOnInit(): void {

    this.token = localStorage.getItem('userToken')
    if (this.token && this.token.length > 0) {
      this.showSign = false;
    }
  }

  wealthCards() {
    this.showMain = false;
    this.showWealth = true;
  }
  healthCards() {
    this.showMain = false;
    this.showHealth = true;
  }
  chooseAgain() {
    this.showMain = true;
    this.showHealth = false;
    this.showWealth = false;
  }

  letsHealth() {

    this.postHealth = localStorage.getItem('yesHealth');

    if (this.postHealth == 1) {
      this.healthCards();
    }
    else {
      this.openModal();
    }
  }

  openModal() {
    this.healthModal.show();
  }

  trackHealth() {
    let body = {
      user_id: localStorage.getItem('userId'),
      profession: this.healthTrackForm.value.profession,
      job_type: this.healthTrackForm.value.job_type,
      job_hours: this.healthTrackForm.value.job_hours,
      age: this.healthTrackForm.value.age,
      weight: this.healthTrackForm.value.weight,
      height: this.healthTrackForm.value.height,
      health_goal: this.healthTrackForm.value.goal
    }

    this.service.api(body, `life_tracking/user_health`, 200, 'post')
      .subscribe((res) => {
        if (res && res.error == 0) {
          this.service.customPopups(res.msg, 0);
          this.healthModal.hide();
          this.healthCards();
        }
        else {
          this.service.customPopups(res.msg, 1);
        }
      })
    console.log(this.healthTrackForm.value, "healthTrackForm")
  }

  logout() {
    this.service.logout();
  }
}
