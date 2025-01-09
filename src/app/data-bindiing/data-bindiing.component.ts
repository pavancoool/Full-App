import { Component } from '@angular/core';

@Component({
  selector: 'app-data-bindiing',
  templateUrl: './data-bindiing.component.html',
  styleUrls: ['./data-bindiing.component.css']
})
export class DataBindiingComponent {

  name:string="pavan";
  age:number=28;
  email:string="pavan@gmail.com";
  

  isIndian=false;

  phone:string="+91 "

  num1:number=0;
  num2:number=0;
  result:number=0;

  sum(){
    this.result=this.num1+this.num2;
    console.log(this.result)
  }

/* user:any={
  name:"pavan",
  age:28,
  email:"pavan@gmail.com", */


  submit(){
    alert("clicked submit button")
  }

  typing(){
    alert("Typing...........")
  }
}
