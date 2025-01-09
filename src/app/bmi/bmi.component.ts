import { Component } from '@angular/core';

@Component({
  selector: 'app-bmi',
  templateUrl: './bmi.component.html',
  styleUrls: ['./bmi.component.css']
})
export class BmiComponent {
  height:number=0;
  weight:number=0;
  result:number=0;
  bmi:string="";

  sub(){

    this.result=this.weight/this.height*this.height;

  if(this.result<18.5 && this.result>0){
      this.bmi="unerweight";
  }else if(this.result>=18.5 && this.result<25){
      this.bmi="Normal";
  }else if(this.result>25 && this.result<30){
      this.bmi="overweight";
  }else if(this.result>30 && this.result<35){
      this.bmi="Moderatly obese";
  }else if(this.result>35 && this.result<40){
      this.bmi="Severely Obese";
  }else if(this.result>=40){
      this.bmi="morbidly obese";
  }else{
      alert("errror");
  }
  }
}
