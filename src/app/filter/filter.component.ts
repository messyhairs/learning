import { Component, OnInit, ComponentFactoryResolver } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {
userdatas =  [
  {
    id: '1',
    name: 'gokul',
    hobbies : [{
      name: 'cricket'
    },
  {
    name: 'football'

  }]
  },
  {
    id: '2',
    name: 'nath',
    hobbies : [{
      name: 'badminton'
    },
  {
    name: 'chess'
  }]
  },
];
UserHobbies: any = [];
  constructor() { }

  ngOnInit() {
  const name = this.userdatas.filter(u => u.name === 'gokul');
  // console.log(name);
  this.userdatas.forEach(element => {
    this.UserHobbies.push(element.hobbies);
  });
  console.log(this.UserHobbies);
  }

}
