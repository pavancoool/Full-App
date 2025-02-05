import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StudentsidcardService } from '../studentsidcard.service';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent {
   student:any=[];
    constructor(private _activatedRoute:ActivatedRoute,private _studentService:StudentsidcardService){
      _activatedRoute.params.subscribe(
        (data:any)=>{
          console.log(data.id);
  
          _studentService.getstudentdetails(data.id).subscribe(
            (data:any)=>{
              this.student=data;
              console.log("data:",data);
            }
          )
        }
      )
    }

}
