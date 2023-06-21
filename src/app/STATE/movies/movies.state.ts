import { MovieInterface, SuggestedMoviesInterface } from "src/app/shared/interfaces/movie.interface";

export interface MovieStateInterface {
  movies: MovieInterface[] | null,
  suggestedMovies: SuggestedMoviesInterface[] | null,
}

export const initialMovieState: MovieStateInterface = {
  movies: null,
  suggestedMovies: null,
}
