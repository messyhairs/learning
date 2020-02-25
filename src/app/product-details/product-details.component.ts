import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  username: string;
  role: string;

  constructor(private route: ActivatedRoute, private titleService: Title, private metaTagService: Meta) {}

  ngOnInit() {
    // snapshot way
    // console.log('thing', this.route.snapshot.params.username);

    // observable way
    this.route.paramMap.subscribe(params => {
      // console.log(params.get('username'));
      this.username = params.get('username');
      this.role = params.get('role');
      this.titleService.setTitle(this.username + ' ' + ' | ' + this.role);
    });
  }


}
