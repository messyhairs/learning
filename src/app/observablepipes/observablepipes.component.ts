import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import {Users} from './users';
import { pipe } from 'rxjs';
import { mergeMap, switchMap, retry, map, catchError, filter, scan } from 'rxjs/operators';
import { SeoService } from '../seo.service';
@Component({
  selector: 'app-observablepipes',
  templateUrl: './observablepipes.component.html',
  styleUrls: ['./observablepipes.component.css']
})
export class ObservablepipesComponent implements OnInit {
usernames = [
  {
id: 1,
name: 'gokul'
},
];
// search text property
searchText: string;

// list of categories
categories: any[] = [
{id: 1, categoryName: 'Schools'},
{id: 2, categoryName: 'Colleges'},
{id: 3, categoryName: 'Doctors'},
{id: 4, categoryName: 'Hospitals'},
{id: 5, categoryName: 'Advocates'}
];

  filterednames: string;
  constructor(private seoService: SeoService) { }

  ngOnInit() {
    this.calculateNumbers();
    this.checkforsameelement();
  }
  getNumbers(): Observable<number> {
    return of(1, 2, 3, 4, 5, 6, 7);
 }
 getnames(): Observable<string> {
  return of('gokul', 'nath');
}
 calculateNumbers() {
  this.getNumbers().pipe(
    filter(n => n % 2 === 1)
  )
  .subscribe(result => console.log(result));
}
checkforsameelement() {
  this.getNumbers().pipe(filter(n => n === 3)).subscribe(answer => console.log('answer for same number' + ' ' + answer));
}
checkforsamenames() {
  this.getnames().pipe(filter(n => n === 'gokul')).subscribe(names => {
    this.filterednames = names;
    console.log('names are' + ' ' + this.filterednames);
  });
}
}

