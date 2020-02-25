import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-checkboxgotit',
  templateUrl: './checkboxgotit.component.html',
  styleUrls: ['./checkboxgotit.component.css']
})
export class CheckboxgotitComponent implements OnInit {
  public rider1: any = [];
  public checkeddatas;
  public selectedusers: any = [];
  public students: any = [];
  public myclasses: any;
  public rider2 = [
    {
name: 'gokul',
select_status: true
    },
  {
    name: 'peepa',
    select_status: false
  },
  {
    name: 'tin-beer',
    select_status: false
  },
  {
    name: 'ajith',
    select_status: true
  },
  {
    name: 'kamesh',
    select_status: true
  },
  {
    name: 'abi',
    select_status: true
  },
  {
    name: 'anandhi',
    select_status: true
  },
  {
    name: 'fathy',
    select_status: true
  },
  ];
  constructor() { }

  ngOnInit() {

    this.rider1.push(this.rider2);
// console.log(this.rider1);
    for (const v of this.rider2) {if (v.select_status === true) {
// this.checkeddatas = v.select_status;
// console.log(this.checkeddatas);
this.selectedusers.push(v);
  }
}
    console.log(this.selectedusers);
  }

}
