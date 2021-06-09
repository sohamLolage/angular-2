import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-myinfo',
  templateUrl: './myinfo.component.html',
  styleUrls: ['./myinfo.component.css']
})
export class MyinfoComponent implements OnInit {
  name:string;
  email:string;
  gender:string;
  technology:string;
  constructor() {
    this.name="soham";
    this.email="soh@gmail.com";
    this.gender="male";
    this.technology="java";

   }

  ngOnInit(): void {
  }

}
