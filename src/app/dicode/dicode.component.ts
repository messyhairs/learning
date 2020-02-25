import { Component, OnInit } from '@angular/core';
import {Dicodes} from '../dicodes';
@Component({
  selector: 'app-dicode',
  templateUrl: './dicode.component.html',
  styleUrls: ['./dicode.component.css'],
  providers: [Dicodes]
})
export class DicodeComponent implements OnInit {
  getuserdats: { name: string; eligible: boolean; }[];

  constructor(private dicodevalues: Dicodes) { }

  ngOnInit() {
   console.log(localStorage.getItem('samplemessage'));
   this.dicodevalues.add();
   console.log('before edit datas from class ' + ' ' +  this.dicodevalues.editdatas);
   console.log('%c Oh my heavens! ', 'background: #222; color: #bada55');
   this.getuserdats = this.dicodevalues.userdatas;
   console.log(this.getuserdats);

  }

}
