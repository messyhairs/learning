import { Component, OnInit } from '@angular/core';
import {NodeService} from './node.service';
@Component({
  selector: 'app-ndetuto',
  templateUrl: './ndetuto.component.html',
  styleUrls: ['./ndetuto.component.css']
})
export class NdetutoComponent implements OnInit {

  constructor(private nodeserv: NodeService) { }

  ngOnInit() {
    this.getsample();
  }
getsample() {
  this.nodeserv.getsampledata().subscribe(result => console.log(result));
}
}
