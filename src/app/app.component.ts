import { Component, OnInit } from '@angular/core';

import { LoadService } from './load.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  showLoader: boolean;

  constructor(
    private loaderService: LoadService) {
  }

  ngOnInit() {
    this.loaderService.status.subscribe((val: boolean) => {
      this.showLoader = val;
    });
  }
}
