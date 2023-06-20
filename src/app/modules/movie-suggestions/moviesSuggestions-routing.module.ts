import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovieSuggestionsComponent } from './components/movie-suggestions/movie-suggestions.component';

const routes: Routes = [
  {
    path:'',
    component: MovieSuggestionsComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MovieSuggestionsRoutingModule { }
