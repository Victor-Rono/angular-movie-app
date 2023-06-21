import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MovieSuggestionsRoutingModule } from './moviesSuggestions-routing.module';
import { MovieSuggestionsComponent } from './components/movie-suggestions/movie-suggestions.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    MovieSuggestionsComponent
  ],
  imports: [
    CommonModule,
    MovieSuggestionsRoutingModule,
    ReactiveFormsModule,
  ]
})
export class MoviesSuggestionsModule { }
