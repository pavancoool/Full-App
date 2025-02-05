import { Component } from '@angular/core';
import { StudentsidcardService } from '../studentsidcard.service';
import { FormControl,FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-create-student',
  templateUrl: './create-student.component.html',
  styleUrls: ['./create-student.component.css']
})
export class CreateStudentComponent {
  id: any;
  constructor(private _studentService:StudentsidcardService, private _router:Router,private _activatedRoute:ActivatedRoute){
    //capturing id with activated route
    _activatedRoute.params.subscribe(
      (data:any)=>{
        console.log(data.id);
        this.id=data.id;
        //intigrating api
        _studentService.getstudentdetails(data.id).subscribe(
          (data:any)=>{
            console.log(data);
            //display the data in form
            this.studentForm.patchValue(data);
          } 
        )
      }
    )
  }
    public studentForm:FormGroup=new FormGroup(
      {
        name:new FormControl(),
        phone:new FormControl(),
        dob:new FormControl(),
        city:new FormControl(),
        email:new FormControl(),
        school_city:new FormControl(),
        school_pin:new FormControl(),
        profile_picture:new FormControl()
    
      }
    )
  
    submit(){
      if(this.id){
        this._studentService.updateStudent(this.id,this.studentForm.value).subscribe(
          (data:any)=>{
            alert("update Successful");
            this._router.navigateByUrl("/dashboard/student");
          },(err:any)=>{
            alert("Internal Server Error")
          }
        )
        //create Vehicle
      }else{
      console.log(this.studentForm.value);
       this._studentService.createStudent(this.studentForm.value).subscribe(
        (data:any)=>{
          console.log(data);
          alert("Student details created successfully");
          // this.-router.navigate(["/vehicle"]);
          this._router.navigateByUrl("/dashboard/student");
        },(err:any)=>{
          alert("internal server error")
        }
      )
    }
    }
}
