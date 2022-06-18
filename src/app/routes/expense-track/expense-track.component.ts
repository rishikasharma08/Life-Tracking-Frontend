import { Component, OnInit } from '@angular/core';
import { MainserviceService } from 'src/app/core/services/mainservice.service';
// import { convertJsToTs, convertJsToTsSync } from 'js-to-ts-converter';

// convertJsToTs('expense.js');
// console.log('Done');


@Component({
  selector: 'app-expense-track',
  templateUrl: './expense-track.component.html',
  styleUrls: ['./expense-track.component.scss']
})
export class ExpenseTrackComponent implements OnInit {

  user_id: any;
  wealthData: any;
  income: any;
  expense: any;
  overall_val: any;

  constructor(private service: MainserviceService) { }

  ngOnInit(): void {
    this.user_id = localStorage.getItem('userId')

    this.getWealth();
  }

  getWealth() {
    this.service.api({ user_id: this.user_id }, `life_tracking/get_wealth`, 200, 'post')
      .subscribe((res) => {
        if (res.error == 0) {
          this.wealthData = res.data;
          this.overall_val = res.overall_val;
          console.log(this.wealthData, "wealthData");
          console.log(this.overall_val, "overall_val");

        }
        else {
          this.service.customPopups(res.msg, 1);
        }
      })
  }

  addTrans() {
    console.log(this.income);
    let body = {
      income: Number(this.income) > 0 ? Number(this.income) : 0,
      expense: Number(this.expense) > 0 ? Number(this.expense) : 0,
      user_id: localStorage.getItem('userId')
    }
    this.service.api(body, `life_tracking/update_wealth`, 200, 'post')
      .subscribe((res) => {
        if (res.error == 0) {
          this.service.customPopups(res.msg, 0);
          this.income = '';
          this.expense = '';
          this.getWealth();
        }
        else {

        }
      })
  }

  logout() {
    this.service.logout();
  }
}
