import { Component, OnInit } from '@angular/core';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
@Component({
  selector: 'app-es2019',
  templateUrl: './es2019.component.html',
  styleUrls: ['./es2019.component.css']
})
export class Es2019Component implements OnInit {
  userdatas = [
    {
      "name":"gokul",
      "passion":"wild-life lover"
    }
  ];
  public userdetails = [];
  constructor( private spinnerService: Ng4LoadingSpinnerService) { }

  ngOnInit() {
    const a1 = [1, 2, [3, 4], 5,[34,56,7,89,90]];
// console.log(a1.flat()); // OUTPUT: [1, 2, 3, 4, 5]
const b1 = [2, 8, 32];
const b2 = b1.map(el => {
  return [el, el * 2];
});
console.log(b2);
// const b3 = b2.flat();
// console.log(b3); // OUTPUT: [2, 4, 8, 16, 32, 64]
var a = 6;
var b = 9;
var check = (b > a)? b : a;
console.log(check);

  }
  show()
  {
    this.spinnerService.show();
         setTimeout(()=>this.spinnerService.hide(),3000,
         );
  }
  getdatas()
  {
    this.show();
    this.userdetails = this.userdatas
  }
}
