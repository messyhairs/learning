import { Component, OnInit } from '@angular/core';
import{HttpClient} from '@angular/common/http';
@Component({
  selector: 'app-jsonformscomp',
  templateUrl: './jsonformscomp.component.html',
  styleUrls: ['./jsonformscomp.component.css']
})
export class JsonformscompComponent implements OnInit {
formsfiled:any;
  constructor(private htp : HttpClient) { }

  ngOnInit() {

    this.htp.get('http://localhost:3000/forms').subscribe(res =>
      {
        console.log(res);
        this.formsfiled = res;
        console.log(this.formsfiled)
      })
  }

}
