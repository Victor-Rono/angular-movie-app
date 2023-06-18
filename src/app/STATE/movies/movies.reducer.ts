import { createReducer, on } from "@ngrx/store";
import { setMoviesAction } from "./movies.actions";
import { initialMovieState } from "./movies.state";

export const moviesReducer = createReducer(
  initialMovieState,
  on(setMoviesAction, (state, action) => ({
      ...state,
      movies: action.movies,
  })),
);
