import { createAction, props } from "@ngrx/store";
import { MovieInterface } from "src/app/shared/interfaces/movie.interface";

export const setMoviesAction  = createAction(
  'set movies',
  props<{ movies: MovieInterface[]  | null }>(),
);
