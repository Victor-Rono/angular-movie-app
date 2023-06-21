import { createFeatureSelector, createSelector } from "@ngrx/store";
import { MovieStateInterface } from "./movies.state";


// gets the entire auth state
const getMoviesState = createFeatureSelector<MovieStateInterface>('movies');

export const selectAllMovies = createSelector(getMoviesState, (state) => state.movies );
export const selectAllSuggestedMovies = createSelector(getMoviesState, (state) => state.suggestedMovies );
