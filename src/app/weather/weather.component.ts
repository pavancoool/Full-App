import { Component } from '@angular/core';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent {
  weathers:any={};
  constructor(private _weatherServices:WeatherService) {
    _weatherServices.getweather().subscribe(
      (data:any)=>{
        this.weathers=data
      }
    )
    
  }
}
