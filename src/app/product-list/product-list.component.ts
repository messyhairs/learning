import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  username = [{
    name: 'chris',
    role: 'front-end developer'
  },
{ name : 'nathu',
role: 'Web app developer'}
 ];

 constructor(private titleService: Title, private metaTagService: Meta) { }
  ngOnInit() {
    this.titleService.setTitle('plist');
    this.metaTagService.updateTag({name: 'description', content: 'I\'m a developer who writes sometimes.'});
  }

}
