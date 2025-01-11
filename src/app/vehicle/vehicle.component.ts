import { Component } from '@angular/core';
import { VehicleService } from '../vehicle.service';

@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.css']
})
export class VehicleComponent {

  vehicles:any=[];
  term:string="";
  constructor(private _vehicleService:VehicleService){
    this.pageload();
  
  }
  pageload(){
    this._vehicleService.getVehicles().subscribe(
      (data:any)=>{
        this.vehicles=data;
        console.log(this.vehicles);
      }
    )
  }
  
  filter(){
    this._vehicleService.getFilteredVehicles(this.term).subscribe(
      (data:any)=>{
        this.vehicles=data;
        console.log(this.vehicles);
      },(err:any)=>{
        alert("Internal Server Error");
      }
    )
  }

  column:string="";
  order:string="";
  sort(){
    this._vehicleService.getSortVehicles(this.column,this.order).subscribe(
      (data:any)=>{
        this.vehicles=data;
        console.log(this.vehicles);
      },(err:any)=>{
        alert("Interenal Server Error");
      }
    )
  }

  limit:number=0;
  page:number=0;
  pagenation(){
  this._vehicleService.getPaginatedVhehicles(this.limit,this.page).subscribe(
    (data:any)=>{
      this.vehicles=data;
      console.log(this.vehicles);
    },(err:any)=>{
      alert("Internal server Error")
    }
  )
  }

  delete(id:number){
    if(confirm("Are You sure to delete?")==true){
      this._vehicleService.deleteVehiclce(id).subscribe(
        (data:any)=>{
          alert("Record Dleted Successfullt");
          this.pageload();
        },(err:any)=>{
          alert("internal Server Error");
        }
      )
    }else{
      alert("you have cancelled")
    }
  }

}
