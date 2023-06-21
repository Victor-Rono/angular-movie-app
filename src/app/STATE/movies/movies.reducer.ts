import { createReducer, on } from "@ngrx/store";
import { setMoviesAction, setSuggestedMoviesAction } from "./movies.actions";
import { initialMovieState } from "./movies.state";

export const moviesReducer = createReducer(
  initialMovieState,
  on(setMoviesAction, (state, action) => ({
      ...state,
      movies: action.movies,
  })),
  on(setSuggestedMoviesAction, (state, action) => ({
    ...state,
    suggestedMovies: action.movies,
})),
);
