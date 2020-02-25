import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-grooceery',
  templateUrl: './grooceery.component.html',
  styleUrls: ['./grooceery.component.css']
})
export class GrooceeryComponent implements OnInit {
  task: string;
  tasks = [];
  metatitle =  'GROOCERY';
  constructor(private titleService: Title,
              private metaTagService: Meta, private router: Router) { }
  ngOnInit() {
    this.titleService.setTitle(this.metatitle);
    this.metaTagService.updateTag({name: 'description', content: 'I\'m a developer who writes sometimes.'});
  }
  onClick() {
    this.tasks.push({name: this.task});
    this.task = '';
    console.log(this.tasks);
}
removeItem(i: number): void {
  // 1 defines delete one item from list at a time
  this.tasks.splice(i, 1);
  console.log(this.tasks);
}
}
