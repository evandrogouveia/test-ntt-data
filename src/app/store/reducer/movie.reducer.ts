import { createReducer, on } from "@ngrx/store";
import { loadMovie, loadMovieSuccess } from "../actions/movie.actions";

const initialState = {};

export const dataReducer = createReducer(
    initialState,
    on(loadMovie, (state, {title}) => {
        return { title: title };
    }),
    on(loadMovieSuccess, (state, movie ) => {
        return {
          ...movie
        };
      }),
  );