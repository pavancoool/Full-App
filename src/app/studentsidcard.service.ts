import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentsidcardService {

  baseurl:string="https://6128991386a213001729f9df.mockapi.io/test/v1/student";
  constructor(private _httpClient:HttpClient) { }

    getstudent():Observable<any>{
        return this._httpClient.get(this.baseurl)
      }

    getFilteredStudent(term:string):Observable<any>{
      return this._httpClient.get("https://6128991386a213001729f9df.mockapi.io/test/v1/student?filter="+term);
    }
    getSortStudent(column:string,order:string):Observable<any>{
      return this._httpClient.get("https://6128991386a213001729f9df.mockapi.io/test/v1/student?sortBy="+column+"&order="+order);
    }
    getPaginatedStudent(limit:number,page:number){
      return this._httpClient.get("https://6128991386a213001729f9df.mockapi.io/test/v1/student?limit="+limit+"&page="+page);
    }

    createStudent(data:any){
      return this._httpClient.post("https://6128991386a213001729f9df.mockapi.io/test/v1/student",data);
    }

    deleteStudent(id:number){
      return this._httpClient.delete("https://6128991386a213001729f9df.mockapi.io/test/v1/student/"+id)
    }
    getstudentdetails(id:number):Observable<any>{
      return this._httpClient.get("https://6128991386a213001729f9df.mockapi.io/test/v1/student/"+id)
    }

    updateStudent(id:number,data:any){
      return this._httpClient.put("https://6128991386a213001729f9df.mockapi.io/test/v1/student/"+id,data)
    }
}
