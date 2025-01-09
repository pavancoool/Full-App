import { Component } from '@angular/core';
import { PrinterestService } from '../printerest.service';

@Component({
  selector: 'app-printerest',
  templateUrl: './printerest.component.html',
  styleUrls: ['./printerest.component.css']
})
export class PrinterestComponent {

  images:any=[];
  constructor(private _imagesServices:PrinterestService){
    _imagesServices.getprinterest().subscribe(
      (data:any)=>{
        this.images=data;
        console.log(this.images);
      }
    )
  }

  
  

}

