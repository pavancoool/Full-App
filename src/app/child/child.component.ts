import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
  @Input() a:number=0;
  @Output() bEvent:EventEmitter<number>=new EventEmitter()

  moon:string="";
  @Input() star:string='';
  @Output() sEvent:EventEmitter<string>=new EventEmitter()

  send(){
    this.sEvent.emit(this.moon);
  }
  
}
