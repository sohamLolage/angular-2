import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  num1:number;
  num2:number;
  res:number;

  constructor() {
    this.num1=0;
    this.num2=0;
    this.res=0;
   }

  ngOnInit(): void {
  }
  add():void{
    this.res=this.num1+this.num2;
  }
  sub():void{
    this.res=this.num1-this.num2;
  }
  mul():void{
    this.res=this.num1*this.num2;
  }
  div():void{
    this.res=this.num1/this.num2;
  }


}
