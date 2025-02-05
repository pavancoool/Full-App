import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-dash',
  templateUrl: './dash.component.html',
  styleUrls: ['./dash.component.css']
})
export class DashComponent {
    constructor(private _router:Router) {}


  logout(){
    sessionStorage.removeItem('token'); // it will clear the token stored in session after logout
    alert("Logout Sucesfully!");
    this._router.navigateByUrl("/login");
  }
  
}
