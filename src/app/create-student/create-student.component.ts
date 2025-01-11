import { Component } from '@angular/core';
import { StudentsidcardService } from '../studentsidcard.service';
import { FormControl,FormGroup } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-create-student',
  templateUrl: './create-student.component.html',
  styleUrls: ['./create-student.component.css']
})
export class CreateStudentComponent {
  constructor(private _studentService:StudentsidcardService, private _router:Router){}
    public studentForm:FormGroup=new FormGroup(
      {
        name:new FormControl(),
        phone:new FormControl(),
        dob:new FormControl(),
        city:new FormControl(),
        email:new FormControl(),
        school_city:new FormControl(),
        school_pin:new FormControl(),
    
      }
    )
  
    create(){
      console.log(this.studentForm.value);
       this._studentService.createStudent(this.studentForm.value).subscribe(
        (data:any)=>{
          console.log(data);
          alert("vehicle created successfully");
          // this.-router.navigate(["/vehicle"]);
          this._router.navigateByUrl("/dashboard/student");
        },(err:any)=>{
          alert("internal server error")
        }
      )
    }
  
}
