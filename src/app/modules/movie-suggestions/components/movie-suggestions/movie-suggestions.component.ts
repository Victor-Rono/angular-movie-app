import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { selectAllSuggestedMovies } from 'src/app/STATE/movies/movies.selectors';
import { SuggestedMoviesInterface } from 'src/app/shared/interfaces/movie.interface';
import { MoviesService } from 'src/app/shared/services/movies/movies.service';

@Component({
  selector: 'app-movie-suggestions',
  templateUrl: './movie-suggestions.component.html',
  styleUrls: ['./movie-suggestions.component.css']
})
export class MovieSuggestionsComponent {
form:FormGroup = new FormGroup({
  movieCategory: new FormControl<string | null>(null),
  movieType: new FormControl<string | null>(null),
  reason: new FormControl<string | null>(null),
  imageURL: new FormControl<string | null>(null),
});
selectedImage: File | null = null;
suggestedMovies: SuggestedMoviesInterface[] = [];
constructor(
  private moviesService: MoviesService,
  private store: Store,
){
this.getSuggestedMovies();
}

getSuggestedMovies(){
this.store.select(selectAllSuggestedMovies).subscribe((movies)=>{
  if(!movies) return;
  this.suggestedMovies = movies;

})
}

onFileSelected(event: any) {
  const file: File = event.target.files[0];

  if (file) {
// this.selectedImage = file;
// compress the image
this.moviesService.compressMovieImage(file).then((compressedFile)=>{
  this.selectedImage = compressedFile;
})
  }
}

convertToBase64(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => {
      const base64String = reader.result as string;
      resolve(base64String);
    };
    reader.onerror = (error) => {
      reject(error);
    };
    reader.readAsDataURL(file);
  });
}



saveImage(imageSrc: string, fileName: string): Promise<void> {
  return new Promise((resolve, reject) => {
    fetch(`assets/images/${fileName}`, {

      method: 'PUT',
      body: imageSrc
    })
      .then((response) => {
        if (response.ok) {
          resolve();
        } else {
          reject(new Error('Image could not be saved.'));
        }
      })
      .catch((error) => {
        reject(error);
      });
  });
}

submit(){
  if(!this.selectedImage){

  }
  // upload image and get url
if(this.selectedImage){
  this.convertToBase64(this.selectedImage).then((response)=>{
    // set the image url in the form
    this.form.patchValue({
      imageURL: response,
    });

 this.moviesService.uploadSuggestedMovie(this.form.value);
  });

}

}
}
