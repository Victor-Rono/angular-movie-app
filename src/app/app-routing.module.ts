import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'',
    redirectTo:'/movies',
    pathMatch: 'full',
  },

  // MOVIES
  {
    path:'movies',
    loadChildren: () => import('./modules/movies/movies.module').then((m) => m.MoviesModule),
  },

  // AUTHENTICATION
  {
    path:'login',
    loadChildren: () => import('./modules/auth/auth.module').then((m) => m.AuthModule),
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
