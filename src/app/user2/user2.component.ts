import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-user2',
  templateUrl: './user2.component.html',
  styleUrls: ['./user2.component.css']
})
export class User2Component {

  public userForm:FormGroup=new FormGroup({
      name: new FormControl('',Validators.required),
      class: new FormControl('',[Validators.required,Validators.minLength(2)]),
      fathername: new FormControl(''),
      mobile:new FormControl('',[Validators.required,Validators.min(1000000000),Validators.max(9999999999)]),
      email: new FormControl('',[Validators.email]),
      dob: new FormControl(''),
      address:new FormGroup({
        addressline:new FormControl(),
        city:new FormControl(),
        state:new FormControl(),
        pincode:new FormControl('',[Validators.required,Validators.max(6)])
}),
 type:new FormControl(),
    
    cards:new FormArray([]),
})

get cardFormArray(){
  return this.userForm.get('cards') as FormArray;
}

addcard(){
  this.cardFormArray.push(
    new FormGroup({
      class:new FormControl(),
      year:new FormControl(),
      percentage:new FormControl('',[Validators.min(0),Validators.max(100)])
    })
  )
}



delete(i:number){
  this.cardFormArray.removeAt(i);
}

constructor(){
  this.userForm.get('type')?.valueChanges.subscribe(
    (data:any)=>{
      if(data=='dayscholar'){
        this.userForm.addControl('busfee',new FormControl());
        this.userForm.removeControl('hostalfee');
      }else{
        this.userForm.addControl('hostelfee',new FormControl());
        this.userForm.removeControl('busfee');
      }
    }
  )
  
}

create(){
  console.log(this.userForm.value);
}


}