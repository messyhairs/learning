import { Component, OnInit } from '@angular/core';
import { NodeService } from './node.service';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-ndetuto',
  templateUrl: './ndetuto.component.html',
  styleUrls: ['./ndetuto.component.css'],
  providers: [NodeService]
})
export class NdetutoComponent implements OnInit {
  userergistreform;
  constructor(private nodeserv: NodeService, private formbuilder: FormBuilder, private formGroup: FormGroup) { }

  ngOnInit() {
    this.getsample();
    this.userergistreform = this.formbuilder.group({
      name : ['' , Validators.required],
      role : ['' , Validators.required]
    });
  }
  getsample() {
    this.nodeserv.getsampledata().subscribe(result => console.log(result));
  }
}
