import { Injectable } from '@angular/core';
import { catchError, map, Observable, Subject, throwError, timeout, TimeoutError } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
declare var require: any
const CDP = require('chrome-remote-interface');

@Injectable({
  providedIn: 'root'
})
export class MainserviceService {
  headers: any;
  timeoutError: any;
  userInfo = new Subject();
  constructor(private http: HttpClient, private toastr: ToastrService, private route: Router) { }

  getUserInfo(user_id: any) {
    this.api({ id: user_id }, `life_tracking/user_info`, 200, 'post')
      .subscribe((res) => {
        if (res && res.error == 0 && res.data && res.data.length > 0) {
          this.userInfo.next(res.data);
        }
        else {
          this.customPopups(res.msg, 1);
        }
      })
  }

  logout() {
    localStorage.removeItem('userToken');
    localStorage.removeItem('userId');
    localStorage.removeItem('yesHealth');
    this.route.navigate(['/signup']);
  }
  api(_data: any, url: any, flag: any, method?: string): Observable<any> {

    let api_url = "http://localhost:3000/";

    // userBaseUrl: "https://api.lendee.com:4044/v1/",
    // userBaseUrl: "https://api.lendee.com:3010/v1/",

    let output;
    let hitting_url = api_url + url;
    if (url.indexOf('http://') !== -1 || url.indexOf('https://') !== -1) {
      hitting_url = url;
    }
    if (method === 'get') {
      output = this.http.get<any>(hitting_url, { headers: this.headers });
    }
    else if (method === 'put') {
      output = this.http.put<any>(hitting_url, (_data), { headers: this.headers });
    } else if (method === 'object') {

      output = this.http.post<any>(hitting_url, (_data));
    }
    else {
      output = this.http.post(hitting_url, (_data), { responseType: 'text' });
    }

    return output
      .pipe(
        timeout(60000),
        map((data: any) => {
          if (data.flag === 377) {
            return false;
          }
          if (data && flag) {
            if (data.err) {
              if (data.override_text) {
                this.customPopups(data.override_text, 1);
              } else {
                this.customPopups(data.err, 1);
              }
            } else {
              // this.customPopups(data.flag, data.is_error);
            }
          }
          return JSON.parse(data);
        }),
        catchError((error: any) => {
          if (error instanceof TimeoutError) {
            if (!this.timeoutError) {
              this.timeoutError = true;
              this.customPopups('Request Timeout', 1);
            }
            return throwError({ error: 'Timeout Exception' });
          }
          if (error.status === 0) {
            if (!this.timeoutError) {
              this.customPopups('Unable to fetch data from server', 1);
            }
          }
          if (error.status === 404) {
            if (!this.timeoutError) {
              this.customPopups('Invalid Request - URL not found', 1);
            }
          }
          return throwError(error);
        })
      );
  }

  customPopups(data: any, err: any) {
    if (err == 0) {
      this.toastr.info(data);
    }
    else if (err == 1) {
      this.toastr.error(data);
    }
    else {
      this.toastr.warning(data);
    }
  }
}
