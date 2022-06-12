import { Component, OnInit } from '@angular/core';
import { MainserviceService } from 'src/app/core/services/mainservice.service';

@Component({
  selector: 'app-expense-track',
  templateUrl: './expense-track.component.html',
  styleUrls: ['./expense-track.component.scss']
})
export class ExpenseTrackComponent implements OnInit {

  constructor(private service: MainserviceService) { }

  ngOnInit(): void {
  }
  logout() {
    this.service.logout();
  }
}
