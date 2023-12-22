import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { MovieItem } from 'src/app/store/models/movieItem.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnChanges{
  @Input() data!: MovieItem;

  max = 5;
  rate = 0;
  isReadonly = true;
  favorite = false;

  ngOnChanges(changes: SimpleChanges): void {
    if (this.data.imdbRating) {
      this.calculeRating(parseInt(this.data.imdbRating));
    }
    this.getFavorite(this.data.imdbID);
  }

  calculeRating(value: number) {
    value = Math.min(10, Math.max(1, value));
    let scale = Math.ceil(value / 2);
    this.rate = scale;
  }

  getFavorite(currentFavoriteID: string) {
    const favoriteID = localStorage.getItem('favorite');
    if (currentFavoriteID && currentFavoriteID === favoriteID) {
      this.favorite = true;
    } else {
      this.favorite = false;
    }
  }

  changeFavorite(event: string) {
    if (event) {
      this.favorite = !this.favorite;
      this.favorite ? localStorage.setItem('favorite', event) : localStorage.removeItem('favorite');
    }
  }
}
