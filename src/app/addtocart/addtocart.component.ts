import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-addtocart',
  templateUrl: './addtocart.component.html',
  styleUrls: ['./addtocart.component.css']
})
export class AddtocartComponent implements OnInit {

  public product = [
    {
      id: '1',
      name: 'apple',
      price: 100
    },
    {
      id: '2',
      name: 'banana',
      price: 200
    },
    {
      id: '3',
      name: 'grape',
      price: 290
    },
    {
      id: '4',
      name: 'orange',
      price: 560
    },
    {
      id: '5',
      name: 'muskmelon',
      price: 180
    }
  ];
  public addcart: any = [];
  public cta = 'ADD';
  public amount = 0;
  public sum = 0;
  finalamount: any = [];
  constructor() { }

  ngOnInit(): void {
  }
  addtocart(event) {
    const datas = event.target.id;
    this.product.forEach(element => {
      if (datas === element.name) {
        this.addcart.push(element);
        this.amount += element.price;
      }
    });
  }
  removeItem(i: number): void {
    this.addcart.splice(i, 1);
  }
}
