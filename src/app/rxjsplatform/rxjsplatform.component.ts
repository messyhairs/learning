import { Component, OnInit } from '@angular/core';
import { fromEvent } from 'rxjs';
import { scan } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-rxjsplatform',
  templateUrl: './rxjsplatform.component.html',
  styleUrls: ['./rxjsplatform.component.css']
})
export class RxjsplatformComponent implements OnInit {

  constructor() { }

  ngOnInit() {
   
    let count = 0;
    let rate = 1000;
    let lastClick = Date.now() - rate;
    document.addEventListener('click', () => {
      if (Date.now() - lastClick >= rate) {
        lastClick = Date.now();
        console.log(`Clicked ${++count} times and date is ${++lastClick}`);

      }
    });
    const observable = new Observable(subscriber => {
      subscriber.next(1);
      subscriber.next(2);
      subscriber.next(3);
      setTimeout(() => {
        subscriber.next(4);
        subscriber.complete();
      }, 1000);
    });
  }
  
}