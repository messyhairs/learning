import { Component, OnInit } from '@angular/core';
import { LoaderService } from './loader.service';
import 'rxjs/add/operator/finally';
@Component({
  selector: 'app-loadertut',
  templateUrl: './loadertut.component.html',
  styleUrls: ['./loadertut.component.css'],
  providers: [LoaderService]
})
export class LoadertutComponent implements OnInit {
  name = 'Angular 5';
  results: any;
  error: any;
  isLoading: boolean;
  sampdatas: any;
  isLoading2: boolean;
  finaldatas: any = [];

  constructor(private service: LoaderService) { }

  ngOnInit() {
  }
  getResult() {
    this.error = null;
    this.results = '';
    this.isLoading = true;
    this.service.invoke('get', 'https://httpbin.org/delay/5')
      .finally(() => this.isLoading = false)
      .subscribe(
        (res) => {
          console.log('Results:', res);
          this.results = res;
        },
        (err) => {
          console.log('Error:', err);
          this.error = err;
        },
      );
  }
  getsample() {
    this.service.getsampldata().finally(() => this.isLoading2 = false).subscribe(res => {
      this.sampdatas = res;
      this.finaldatas.push(this.sampdatas);
      console.log(this.finaldatas);
    },
      (err) => console.log(err));
  }
}
