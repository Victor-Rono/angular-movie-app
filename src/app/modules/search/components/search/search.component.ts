import { Component } from '@angular/core';
import { take } from 'rxjs';
import { MovieInterface, SearchedMovieInterface } from 'src/app/shared/interfaces/movie.interface';
import { MoviesService } from 'src/app/shared/services/movies/movies.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
searchTerm: string | null = null;
movies: SearchedMovieInterface[] | null = null;
constructor(
  private moviesService: MoviesService,
){


this.moviesService.searchTerm.pipe(take(1)).subscribe({
  next:(data)=>{
  if(data){
    this.searchTerm = data;
    // search for the movie
    this.searchMovies(this.searchTerm);
  }

  },
});

}

searchMovies(searchTerm: string){
this.moviesService.searchMovie(searchTerm).pipe(take(1)).subscribe({
next:(data)=>{

  this.movies = data;

},
error:(err)=>{
},
});
}


search(event:any){
  const searchTerm = event.value;
this.searchMovies(searchTerm)
}

}
