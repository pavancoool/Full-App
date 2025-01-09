import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyntraService {

  constructor(private _httpClient:HttpClient) { }

  getproducts(){
    return this._httpClient.get("https://fakestoreapi.com/products")
  } 
}
