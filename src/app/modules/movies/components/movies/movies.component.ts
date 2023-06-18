import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectAllMovies } from 'src/app/STATE/movies/movies.selectors';
import { MovieInterface } from 'src/app/shared/interfaces/movie.interface';
import { AuthService } from 'src/app/shared/services/auth/auth.service';
import { MoviesService } from 'src/app/shared/services/movies/movies.service';
import {cloneDeep} from 'lodash';
@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent {

  movies: MovieInterface[] | null = null;
  filteredMovies: MovieInterface[] | null = null;

constructor(
  private authService: AuthService,
  private moviesService: MoviesService,
  private store: Store,
){
this.getMovies();
}

logout(){
  // log the user out
  this.authService.logout();
}


getMovies(){
  // Fetch movies from API & save to state
this.moviesService.getUpcomingMovies();

// Get movies from state
this.store.select(selectAllMovies).subscribe((movies)=>{

  this.movies = movies;
  this.filteredMovies = movies;

});
}

search(event:any){

let searchTimeout = setTimeout(()=>{
clearTimeout(searchTimeout);
  if(!this.movies) return;
  const searchTerm = event.value;

 // make a deep copy of the movies
const moviesCopy = cloneDeep(this.movies);
if(!searchTerm){
  this.filteredMovies = moviesCopy;
  return;
}

this.filteredMovies = moviesCopy.filter((movie)=> movie.titleText.text.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase()));


}, 1000);




}

getMovieDate(movie: MovieInterface):string{
const date = movie.releaseDate;
const releaseDate = `${date.month}-${date.day}-${date.year}`;
return releaseDate;
}


}
