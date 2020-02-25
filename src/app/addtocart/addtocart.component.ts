import { Component, OnInit } from '@angular/core';
export interface IProducts {
  product_id: string;
  product_img: string;
  product_name: string;
  product_price: number;
  product_details: string;
  product_quality: number;
}
@Component({
  selector: 'app-addtocart',
  templateUrl: './addtocart.component.html',
  styleUrls: ['./addtocart.component.css']
})
export class AddtocartComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
