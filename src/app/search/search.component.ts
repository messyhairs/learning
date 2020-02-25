import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  public search:any = '';
  locked: any[] = [];

  constructor() { }

  ngOnInit() {

    this.locked = [
      {ID: 1, User: 'Agustin', AuthID: '68114', FormName: 'Fellman', WinHandle: 'Oak Way'},
      {ID: 2, User: 'Alden', AuthID: '98101', FormName: 'Raccoon Run', WinHandle: 'Newsome'},
      {ID: 3, User: 'Ramon', AuthID: '28586', FormName: 'Yorkshire Circle', WinHandle: 'Dennis'},
      {ID: 4, User: 'Elbert', AuthID: '91775', FormName: 'Lee', WinHandle: 'Middleville Road'},
  ]

  }

}
