import { Component } from '@angular/core';

@Component({
  selector: 'app-circle',
  templateUrl: './circle.component.html',
  styleUrls: ['./circle.component.css']
})
export class CircleComponent {

  radius:number=0;
  
  result1:number=0;
  result2:number=0;

  sub(){
    this.result1=3.14*this.radius*this.radius;
  }
  per(){
    this.result2=2*3.14*this.radius;
  }
}
