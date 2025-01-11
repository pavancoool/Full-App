import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentsidcardService {

  constructor(private _httpClient:HttpClient) { }

    getstudent():Observable<any>{
        return this._httpClient.get("https://6128991386a213001729f9df.mockapi.io/test/v1/student")
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
}
