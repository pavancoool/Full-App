import { Component } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent {

  age:number=45;
  //variable diclaration  variable name: datatype=initialValue;

  ages:number[]=[10,20,30,40,50,66];

  //array of strings
  state:string="Karnataka";
  states:string[]=['Karnataka','Ap','Telangana','Kerala'];

  // array of objects

  products:any[]=[
    {productName:'book',price:50},
    {productName:'Shirt',price:500},
    {productName:'Mobile',price:50000},
    {productName:'Bike',price:350000},
    {productName:'Car',price:5000000},
  ];

  today:any=new Date();

}
