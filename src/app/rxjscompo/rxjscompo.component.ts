import { Component, OnInit } from '@angular/core';
import { map, filter, retry, scan, catchError } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { RxjsservService } from './rxjsserv.service';

@Component({
  selector: 'app-rxjscompo',
  templateUrl: './rxjscompo.component.html',
  styleUrls: ['./rxjscompo.component.css']
})
export class RxjscompoComponent implements OnInit {
  stdNames$: Observable<string[]>;
  countryName$: Observable<string>;
  countryStates: string[];
  finaldatas: any = [];

  constructor(private service: RxjsservService) { }

  ngOnInit() {
    this.getstudentsdetails();
    this.getCountryName();
    const cities = ['Varanasi', 'Mathura', 'Ayodhya'];

    // Using JavaScript Array map
    cities.map(c => 'Holy ' + c)
      .forEach(el => console.log(el));

    // Using RxJS map
    of(cities).pipe(
      map(dataArray => dataArray.join(', '))
    ).subscribe(res => console.log(res));
  }
  getstudentsdetails() {
    this.stdNames$ = this.service.getStdNames().pipe(
      map(res => res.split(', '))
    );
    this.service.getStdNames().pipe(
      map(res => res.split(','))
    ).subscribe(names => names.forEach(name => console.log(name)));
    // return in array
    // .subscribe(result => console.log(result));
  }
  // Using map and catchError
  getCountryName() {
    this.countryName$ = this.service.getCountry().pipe(
      map(country => country.getCountryName()),
      catchError(err => {
        console.error(err);
        return of('');
      })
    );
  }
}
