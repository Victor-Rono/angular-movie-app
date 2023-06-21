import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MovieInterface, SearchedMovieInterface, SuggestedMoviesInterface } from '../../interfaces/movie.interface';
import { Store } from '@ngrx/store';
import { setMoviesAction, setSuggestedMoviesAction } from 'src/app/STATE/movies/movies.actions';
import { BehaviorSubject, Observable, take } from 'rxjs';
import { selectAllSuggestedMovies } from 'src/app/STATE/movies/movies.selectors';
import { cloneDeep } from 'lodash';

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
       // Assuming the response is an array of movies
      this.store.dispatch(setMoviesAction( {movies: movies} ));
    });
  }


  uploadSuggestedMovie(movie: SuggestedMoviesInterface){

// get suggested movies from state
this.getSuggestedMovies().pipe(take(1)).subscribe((movies)=>{
  // deep copy of suggested movies
  const suggestedMovies = cloneDeep(movies);

  if(!suggestedMovies.includes(movie)){
    // new array of suggested movies
    suggestedMovies.push(movie);
  // save to state
  this.store.dispatch(setSuggestedMoviesAction({movies: suggestedMovies}));
  // save to local storage
  localStorage.setItem('suggestedMovies', JSON.stringify(suggestedMovies));
  }
})

// push new movie into array

// save new array to state
  }


  getSuggestedMovies(): Observable<SuggestedMoviesInterface[]> {
    return new Observable<SuggestedMoviesInterface[]>((subscriber)=>{
      this.store.select(selectAllSuggestedMovies).subscribe((movies)=>{
        subscriber.next(movies || []);
      })
    })
  }

  getSuggestedMoviesFromLocalStorage(){
    const localStorageMovies = localStorage.getItem('suggestedMovies');
    if(localStorageMovies){
      // get from local storage
      const suggestedMovies: SuggestedMoviesInterface[] = JSON.parse(localStorageMovies || '[]');
    // save to state
      this.store.dispatch(setSuggestedMoviesAction({movies: suggestedMovies}));
    }

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

// COMPRESSES AN IMAGE
  compressMovieImage(file: File): Promise<File> {
    return new Promise<File>((resolve, reject) => {
      const reader = new FileReader();
      const fileName = + Date.now().toString() + '.jpg';
      reader.onload = (event: any) => {
        const image = new Image();
        image.src = event.target.result;

        image.onload = () => {
          const canvas = document.createElement('canvas');
          const context = canvas.getContext('2d');

          const maxWidth = image.width * 0.9;
          const maxHeight = image.height * 0.9;

          let width = image.width;
          let height = image.height;

          // Scale the image down if it exceeds the maximum dimensions
          if (width > maxWidth || height > maxHeight) {
            const aspectRatio = width / height;

            if (width > maxWidth) {
              width = maxWidth;
              height = width / aspectRatio;
            }

            if (height > maxHeight) {
              height = maxHeight;
              width = height * aspectRatio;
            }
          }

          // Set the canvas dimensions to the scaled width and height
          canvas.width = width;
          canvas.height = height;

          // Draw the image onto the canvas
          context!.drawImage(image, 0, 0, width, height);

          // Convert the compressed image to a Blob
          canvas.toBlob((blob) => {
            // Create a new File from the Blob
            const compressedFile = new File([blob!], fileName, {
              type: file.type,
              lastModified: Date.now(),
            });

            resolve(compressedFile);
          }, file.type, 0.35);
        };

        image.onerror = (error) => {
          reject(error);
        };
      };

      reader.onerror = (error) => {
        reject(error);
      };

      reader.readAsDataURL(file);
    });
  }

}

