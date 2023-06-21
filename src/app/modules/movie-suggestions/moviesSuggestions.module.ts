import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MovieSuggestionsRoutingModule } from './moviesSuggestions-routing.module';
import { MovieSuggestionsComponent } from './components/movie-suggestions/movie-suggestions.component';


@NgModule({
  declarations: [
    MovieSuggestionsComponent
  ],
  imports: [
    CommonModule,
    MovieSuggestionsRoutingModule
  ]
})
export class MoviesSuggestionsModule { }
