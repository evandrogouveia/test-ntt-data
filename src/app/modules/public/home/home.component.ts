import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { MovieItem } from 'src/app/store/models/movieItem.model';
import { loadMovie } from 'src/app/store/actions/movie.actions';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  search: string = '';
  movies$: Observable<any> = this.store.select(state => state);
  title: any;

  constructor(
    private store: Store<MovieItem>
  ) { }

  changeSearch() {
    this.title = { title: this.search }
    this.store.dispatch(loadMovie(this.title));
  }

  changeReset() {
    this.search = '';
    this.title = { title: this.search }
    this.store.dispatch(loadMovie(this.title));
  }

}
