import { Component, OnInit } from '@angular/core';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'childcomops',
  templateUrl: './childcomop.component.html',
  styleUrls: ['./childcomop.component.css']
})
export class ChildcomopComponent implements OnInit {
a = 3;
b = 9;
c: any;
test = 0;
  constructor() { }

  ngOnInit() {
  }
  callMethod() {
    console.log('successfully executed.');
    this.test++;
  }
  addsomevalues() {
    this.sumfun();
  }
  sumfun() {
    this.c = this.a + this.b;
    console.log(this.c);
    const values = 2 + 4;
  }

}
