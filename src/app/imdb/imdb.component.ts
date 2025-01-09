import { Component } from '@angular/core';
import { ImdbService } from '../imdb.service';

@Component({
  selector: 'app-imdb',
  templateUrl: './imdb.component.html',
  styleUrls: ['./imdb.component.css']
})
export class ImdbComponent {

  imdbs: any = [];
  constructor(private _imdbService: ImdbService) {
    _imdbService.getimdb().subscribe(
      (data: any) => {
        this.imdbs = data;
      }
    )
  }
  getStar(rating: number) {
    return Math.floor(rating);
  }
}
