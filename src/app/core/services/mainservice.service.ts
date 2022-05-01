import { Injectable } from '@angular/core';
import { catchError, map, Observable, throwError, timeout, TimeoutError } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
declare var require: any
const CDP = require('chrome-remote-interface');

@Injectable({
  providedIn: 'root'
})
export class MainserviceService {
  headers: any;
  timeoutError: any;
  constructor(private http: HttpClient, private toastr: ToastrService) { }

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
      output = this.http.post<any>(hitting_url, (_data));
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
          return data;
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
      this.toastr.success(data, err);
    }
    else if (err == 1) {
      this.toastr.error(data, err);
    }
    else {
      this.toastr.warning(data, err);
    }
  }
}
