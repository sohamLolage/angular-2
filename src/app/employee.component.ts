import { Component, OnInit } from '@angular/core';
import { Employee } from './Employee';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  
  id:number;
  name:string;
  email:string;
  dept:string;
  emp:Employee[];
  selectedIndex:number;
  flag:boolean;

  constructor() {
    this.emp=[];
    this.id=0;
    this.name="";
    this.email="";
    this.dept="";
    this.selectedIndex=0;
    this.flag=false;
   }

  ngOnInit(): void {
  }

  onSubmit():void{
    const emp1={
      id:this.id,
      name:this.name,
      email:this.email,
      dept:this.dept
    }
    this.emp.push(emp1);
    console.log(this.emp);
    
  }
  onDelete(empobj:Employee){
    let index=this.emp.indexOf(empobj);
    this.emp.splice(index,1);
  }
  onEdit(i:any){

    console.log("your are in on edit");
    this.flag=true;
    this.selectedIndex = i;
    this.id = this.emp[i].id;
    this.name = this.emp[i].name;
    this.email = this.emp[i].email;
    this.dept=this.emp[i].dept;

  }

  onUpdate(){
    this.flag=false;

    this.emp[this.selectedIndex].id=this.id;
    this.emp[this.selectedIndex].name=this.name;
    this.emp[this.selectedIndex].email=this.email;
    this.emp[this.selectedIndex].dept=this.dept;
    this.id=0;
    this.name="";
    this.email="";
    this.dept="";

  }

}
