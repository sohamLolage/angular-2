import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  public product=[
    {
      id:145,
      name:"Mobile",
      price:18500,
      discount:true
    },
    {
      id:123,
      name:"pc",
      price:30000,
      discount:false
    },
    {
      id:754,
      name:"Laptop",
      price:80000,
      discount:true
    },
    {
      id:635,
      name:" 8gb Ram",
      price:5000,
      discount:false
    },
    {
      id:457,
      name:"Speaker",
      price:5000,
      discount:true
    },
    {
      id:789,
      name:"LED Display",
      price:34000,
      discount:true
    },
    {
      id:7845,
      name:"bluetooth",
      price:2400,
      discount:false
    }

];

  constructor() { }

  ngOnInit(): void {
  }

}
