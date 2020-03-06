import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventemitter',
  templateUrl: './eventemitter.component.html',
  styleUrls: ['./eventemitter.component.css']
})
export class EventemitterComponent implements OnInit {

  constructor() { }
  products = [];
  title = 'Products';
  ngOnInit() {
    this.products = this.getProducts();
  }
  displaycounter(count) {
    console.log(count);
  }
  getProducts() {
    return [
      { id: '1', title: 'Screw Driver', price: 400, stock: 11 },
      { id: '2', title: 'Nut Volt', price: 200, stock: 5 },
      { id: '3', title: 'Resistor', price: 78, stock: 45 },
      { id: '4', title: 'Tractor', price: 20000, stock: 1 },
      { id: '5', title: 'Roller', price: 62, stock: 15 },
    ];
  }
}
