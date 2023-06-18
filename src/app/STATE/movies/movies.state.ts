import { MovieInterface } from "src/app/shared/interfaces/movie.interface";

export interface MovieStateInterface {
  movies: MovieInterface[] | null,
}

export const initialMovieState: MovieStateInterface = {
  movies: null,
}
