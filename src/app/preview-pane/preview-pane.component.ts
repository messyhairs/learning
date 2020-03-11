import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-preview-pane',
  templateUrl: './preview-pane.component.html',
  styleUrls: ['./preview-pane.component.css']
})
export class PreviewPaneComponent implements OnInit {
  username = [{
    name: 'chris',
    role: 'front-end developer'
  },
  {
    name: 'nathu',
    role: 'Web app developer'
  }
  ];
  constructor() { }

  ngOnInit() {
  }

}
