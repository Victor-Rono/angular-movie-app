import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MovieInterface, SearchedMovieInterface } from '../../interfaces/movie.interface';
import { Store } from '@ngrx/store';
import { setMoviesAction } from 'src/app/STATE/movies/movies.actions';
import { BehaviorSubject, Observable, take } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(
    private httpClient: HttpClient,
    private store: Store,
  ) { }

searchTerm = new BehaviorSubject<string | null>(null);

  getUpcomingMovies(): void {
    const url = 'https://moviesdatabase.p.rapidapi.com/titles/x/upcoming';
    const headers = {
      'X-RapidAPI-Key': '650dbe08b6msh67af47a89fe2d43p1cdbfdjsna6743fa4f9cd',
      'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'
    };

    this.httpClient.get(url, { headers }).subscribe((response:any) => {
      const movies = response.results as MovieInterface[];
      console.log("movie");
       // Assuming the response is an array of movies
      this.store.dispatch(setMoviesAction( {movies: movies} ));
    });
  }



  searchMovie(searchTerm:string): Observable<SearchedMovieInterface[]> {
    const url = 'http://www.omdbapi.com';
    const params = {
      s: searchTerm,
      apikey: 'f91ddec1'
    };

  return new Observable<SearchedMovieInterface[]>((subscriber)=>{
    this.httpClient.get(url, { params }).pipe(take(1)).subscribe((response:any) => {
      const movies = response['Search'] as SearchedMovieInterface[]; // Assuming the response has a 'Search' property containing the movies
      subscriber.next(movies)
    });

  })
  }
}
