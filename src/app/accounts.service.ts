import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccountsService {

  constructor(private _httpClient:HttpClient) { }

  getaccounts():Observable<any>{
      return this._httpClient.get("https://6128991386a213001729f9df.mockapi.io/test/v1/principals")
    }
    
    getFilteredAccount(term:string):Observable<any>{
      return this._httpClient.get("https://6128991386a213001729f9df.mockapi.io/test/v1/principals?filter="+term);
    }
    
    getSortAccount(column:string,order:string):Observable<any>{
      return this._httpClient.get("https://6128991386a213001729f9df.mockapi.io/test/v1/principals?sortBy="+column+"&order="+order);
    }

    getPaginatedAccounts(limit:number,page:number){
      return this._httpClient.get("https://6128991386a213001729f9df.mockapi.io/test/v1/principals?limit="+limit+"&page="+page);
    }

    deleteaccount(id:number){
      return this._httpClient.delete("https://6128991386a213001729f9df.mockapi.io/test/v1/principals/"+id);
    }
}
