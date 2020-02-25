import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class LoaderService {
  constructor(private http: HttpClient) { }
  invoke(method, url, options = {}) {
    return this.http.request(method, url, options);
  }
  getsampldata() {
    return this.http.get(`http://dummy.restapiexample.com/api/v1/employees`);
  }
}
