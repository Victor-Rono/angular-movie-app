import { createAction, props } from "@ngrx/store";
import { MovieInterface, SuggestedMoviesInterface } from "src/app/shared/interfaces/movie.interface";

export const setMoviesAction  = createAction(
  'set movies',
  props<{ movies: MovieInterface[]  | null }>(),
);

export const setSuggestedMoviesAction  = createAction(
  'set Suggested movies',
  props<{ movies: SuggestedMoviesInterface[]  | null }>(),
);
