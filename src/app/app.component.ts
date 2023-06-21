import { Component } from '@angular/core';
import { authSelector } from './STATE/auth/auth.selectors';
import { Store } from '@ngrx/store';
import { MoviesService } from './shared/services/movies/movies.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-movie-app';
user: any;
  constructor(
    private store: Store,
    private moviesService: MoviesService,
  ){
   // set the user
  this.store.select(authSelector).subscribe((auth)=>{
    this.user = auth;
    if(auth){
      this.getSuggestedMovies();
      this.getUpcomingMovies();
    }
  });


  }

  // Get upcoming movies
getUpcomingMovies(){
this.moviesService.getUpcomingMovies();
}

  // get suggested movies
  getSuggestedMovies(){
    this.moviesService.getSuggestedMoviesFromLocalStorage();
    }
}
