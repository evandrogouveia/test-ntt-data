import { createAction, props } from "@ngrx/store";
import { MovieItem } from "../models/movieItem.model";

export const loadMovie = createAction('[Movie List] Load Movie', props<{title: string}>());
export const loadMovieSuccess = createAction('[Movie List] Load Movie Success', props<{movie: MovieItem}>());