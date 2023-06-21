import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './modules/page-not-found/page-not-found.component';
import { AuthGuard } from './shared/guards/auth/auth.guard';
import { LoginGuard } from './shared/guards/login/login.guard';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { MovieSuggestionsComponent } from './modules/movie-suggestions/components/movie-suggestions/movie-suggestions.component';

const routes: Routes = [

{
  path:'',
  component: MainLayoutComponent,
  canActivate: [AuthGuard],
  children:[
    {
      path:'',
      redirectTo:'/upcoming-movies',
      pathMatch: 'full',
    },

    // MOVIES
    {
      path:'upcoming-movies',
      loadChildren: () => import('./modules/movies/movies.module').then((m) => m.MoviesModule),
    },

    // SEARCH
    {
      path:'search',
      canActivate: [AuthGuard],
      loadChildren: () => import('./modules/search/search.module').then((m) => m.SearchModule),
    },

    // MOVIE SUGGESTIONS
    {
    path: 'movie-suggestions',
    loadChildren: () => import('./modules/movie-suggestions/moviesSuggestions.module').then((m) => m.MoviesSuggestionsModule),
    }
  ]
},

{
path:'',
component:AuthLayoutComponent,
canActivate: [LoginGuard],
children:[
   // LOGIN
   {
    path:'login',
    loadChildren: () => import('./modules/auth/auth.module').then((m) => m.AuthModule),
  },
]
},
  {
  path: '**',
   component: PageNotFoundComponent,
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
