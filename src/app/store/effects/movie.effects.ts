import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, exhaustMap, catchError } from 'rxjs/operators';
import { HomeService } from 'src/app/modules/public/home/services/home.service';
import { loadMovie, loadMovieSuccess } from '../actions/movie.actions';

@Injectable()
export class MoviesEffects {

    loadMovies$ = createEffect(() =>
        this.actions$.pipe(
            ofType(loadMovie),
            exhaustMap((res) => this.homeService.getMovie(res.title)
                .pipe(
                    map(movie =>  loadMovieSuccess(movie)),
                    catchError(() => EMPTY)
                ))
        )
    );

    constructor(
        private actions$: Actions,
        private homeService: HomeService
    ) {}
}