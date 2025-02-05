import { Component, Input } from '@angular/core';
import { max } from 'rxjs';

@Component({
  selector: 'app-textarea',
  templateUrl: './textarea.component.html',
  styleUrls: ['./textarea.component.css']
})
export class TextareaComponent {

  @Input()max:number=20;
  text:any='';
  textCount:any=0;
  
  onTextChange(event:any){ 
    this.textCount=this.text.length;
    if(this.textCount==this.max){
      alert('you have reached maximum char')
    }else
    return;
   }

}
