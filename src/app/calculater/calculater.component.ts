import { Component } from '@angular/core';

@Component({
  selector: 'app-calculater',
  templateUrl: './calculater.component.html',
  styleUrls: ['./calculater.component.css']
})
export class CalculaterComponent {

  input_one:number=0;
  input_two:number=0;
  result:number=0;

  add(){
    this.result=this.input_one+this.input_two;
  }

  sub(){
    this.result=this.input_one-this.input_two;
  }
  mul(){
    this.result=this.input_one*this.input_two;
  }

  div(){
    this.result=this.input_one/this.input_two;
  }

}
