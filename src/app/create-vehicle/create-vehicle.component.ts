import { Component } from '@angular/core';
import { VehicleService } from '../vehicle.service';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-create-vehicle',
  templateUrl: './create-vehicle.component.html',
  styleUrls: ['./create-vehicle.component.css']
})
export class CreateVehicleComponent {
  id: any;
  constructor(private _vehicleService:VehicleService, private _router:Router,private _activatedRoute:ActivatedRoute){
    //capturing id with activated route
    _activatedRoute.params.subscribe(
      (data:any)=>{
        console.log(data.id);
        this.id=data.id;
        //intigrating api
        _vehicleService.getVehicle(data.id).subscribe(
          (data:any)=>{
            console.log(data);
            //display the data in form
            this.vehicleForm.patchValue(data);
          } 
        )
      }
    )
  }
  public vehicleForm:FormGroup=new FormGroup(
    {
      Vehicle:new FormControl(),
      manufacturer:new FormControl(),
      model:new FormControl(),
      type:new FormControl(),
      fuel:new FormControl(),
      color:new FormControl(),
      image:new FormControl(),
      cost:new FormControl(),
    }
  )

  submit(){
    //update vehicle
    if(this.id){
      this._vehicleService.updateVehicle(this.id,this.vehicleForm.value).subscribe(
        (data:any)=>{
          alert("update Successful");
          this._router.navigateByUrl("/dashboard/vehicle");
        },(err:any)=>{
          alert("Internal Server Error")
        }
      )
      //create Vehicle
    }else{
      console.log(this.vehicleForm.value);
      this._vehicleService.createVehicle(this.vehicleForm.value).subscribe(
       (data:any)=>{
         console.log(data);
         alert("vehicle created successfully");
         // this.-router.navigate(["/vehicle"]);
         this._router.navigateByUrl("/dashboard/vehicle");
       },(err:any)=>{
         alert("internal server error")
       }
     )
    }
   
  }

}
