import { Component, OnInit } from '@angular/core';
import {ChildcomopComponent} from '../childcomop/childcomop.component';
@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css'],
  providers: [ChildcomopComponent]
})
export class ParentComponent implements OnInit {

  constructor(
    private childcompo: ChildcomopComponent
  ) { }

  ngOnInit() {
console.log(this.childcompo.a);
this.childcompo.a = 9;
console.log('child value after assigned' + ' ' + this.childcompo.a);
  }

}
