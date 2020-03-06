import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-eventemitterchild',
  templateUrl: './eventemitterchild.component.html',
  styleUrls: ['./eventemitterchild.component.css']
})
export class EventemitterchildComponent implements OnInit {

  @Output() valueChange = new EventEmitter();
  counter  = 0;

  constructor() { }

  ngOnInit() {
  }
imhere() {
  this.counter = this.counter + 1;
  console.log(this.counter);
}
}
