import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  showMain: boolean = true;
  showWealth: boolean = false;
  showHealth: boolean = false;

  constructor() { }

  ngOnInit(): void {
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
}
