import { Component } from '@angular/core';
import { StudentsidcardService } from '../studentsidcard.service';

@Component({
  selector: 'app-studentsidcard',
  templateUrl: './studentsidcard.component.html',
  styleUrls: ['./studentsidcard.component.css']
})
export class StudentsidcardComponent {
  students:any=[];
       term:string="";
        constructor(private _studentService:StudentsidcardService){
          _studentService.getstudent().subscribe(
            (data:any)=>{
              this.students=data;
              console.log(this.students);
            }
          )
        }
        
        filter(){
          this._studentService.getFilteredStudent(this.term).subscribe(
            (data:any)=>{
              this.students=data;
              console.log(this.students);
            },(err:any)=>{
              alert("Internal Server Error");
            }
          )
        }

        column:string="";
        order:string="";
        sort(){
          this._studentService.getSortStudent(this.column,this.order).subscribe(
            (data:any)=>{
              this.students=data;
              console.log(this.students);
            },(err:any)=>{
              alert("Interenal Server Error");
            }
          )
        }

        limit:number=0;
        page:number=0;
        pagenation(){
        this._studentService.getPaginatedStudent(this.limit,this.page).subscribe(
          (data:any)=>{
            this.students=data;
            console.log(this.students);
          },(err:any)=>{
            alert("Internal server Error")
          }
        )
        }
}
