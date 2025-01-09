import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MailService {

  constructor(private _httpClient:HttpClient) { }

  getMail(){
    return this._httpClient.get("https://jsonplaceholder.typicode.com/todos")
  }
}
