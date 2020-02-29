import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class LoadService {
  public status: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor(private http: HttpClient) { }
  invoke(method, url, options = {}) {
    return this.http.request(method, url, options);
  }
  getsampldata() {
    return this.http.get(`http://dummy.restapiexample.com/api/v1/employees`);
  }
  display(value: boolean) {
    this.status.next(value);
  }
}
