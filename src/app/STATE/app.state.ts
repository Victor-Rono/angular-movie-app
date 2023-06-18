import { authReducer } from "./auth/auth.reducer";
import { AuthStateInterfcace } from "./auth/auth.state";
import { moviesReducer } from "./movies/movies.reducer";
import { MovieStateInterface } from "./movies/movies.state";

export interface AppStateInterface {
    auth: AuthStateInterfcace,
    movies: MovieStateInterface,
}

export const appReducer = {
    auth: authReducer,
    movies: moviesReducer,
}
