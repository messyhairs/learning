import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-jqryxamples',
  templateUrl: './jqryxamples.component.html',
  styleUrls: ['./jqryxamples.component.css']
})
export class JqryxamplesComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    $(document).ready(function(){
      $("#btn1").click(function(){
        alert("Text: " + $("#test").text());
      });
      $("#btn2").click(function(){
        alert("HTML: " + $("#test").html());
      });
    });
      
  }

}
