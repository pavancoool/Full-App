import { Component } from '@angular/core';
import { UserprofileService } from '../userprofile.service';

@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.css']
})
export class UserprofileComponent {

  profiles:any=[];
  constructor(private _userProfileService:UserprofileService){
    _userProfileService.getuserprofile().subscribe(
      (data:any)=>{
        this.profiles=data;
      }
    )
  }

}
