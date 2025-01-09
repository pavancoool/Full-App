import { Component } from '@angular/core';
import { MyntraService } from '../myntra.service';

@Component({
  selector: 'app-myntra',
  templateUrl: './myntra.component.html',
  styleUrls: ['./myntra.component.css']
})
export class MyntraComponent {

    products:any=[];
    constructor(private _productServices:MyntraService){
      _productServices.getproducts().subscribe(
        (data:any)=>{
          this.products=data;
          console.log(this.products);
        }
      )
    }

   
}
