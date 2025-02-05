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
          this.pageload();

        }

        pageload(){
          this._studentService.getstudent().subscribe(
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

        delete(id:number){
          if(confirm("Are You sure to delete?")==true){
            this._studentService.deleteStudent(id).subscribe(
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
