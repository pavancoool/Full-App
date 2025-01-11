import { Component } from '@angular/core';
import { AccountsService } from '../accounts.service';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.css']
})
export class AccountsComponent {
     accounts:any=[];
     term:string="";
      constructor(private _accountServices:AccountsService){
        _accountServices.getaccounts().subscribe(
          (data:any)=>{
            this.accounts=data;
            console.log(this.accounts);
          }
        )
      }

      filter(){
        this._accountServices.getFilteredAccount(this.term).subscribe(
          (data:any)=>{
            this.accounts=data;
            console.log(this.accounts);
          },(err:any)=>{
            alert("Internal Server Error");
          }
        )
      }

      column:string="";
      order:string="";
      sort(){
        this._accountServices.getSortAccount(this.column,this.order).subscribe(
          (data:any)=>{
            this.accounts=data;
            console.log(this.accounts);
          },(err:any)=>{
            alert("Interenal Server Error");
          }
        )
      }

      limit:number=0;
      page:number=0;
      pagenation(){
      this._accountServices.getPaginatedAccounts(this.limit,this.page).subscribe(
        (data:any)=>{
          this.accounts=data;
          console.log(this.accounts);
        },(err:any)=>{
          alert("Internal server Error")
        }
      )
      }

      delete(id:number){
        if(confirm("Are You sure to delete?")==true){
          this._accountServices.deleteaccount(id).subscribe(
            (data:any)=>{
              alert("Record Dleted Successfullt");
              location.reload();
            },(err:any)=>{
              alert("internal Server Error");
            }
          )
        }else{
          alert("you have cancelled")
        }
      }
}
