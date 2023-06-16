import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MoviesGuard } from './shared/guards/movies/movies.guard';
import { AuthGGuard } from './shared/guards/auth/auth.guard';
import { PageNotFoundComponent } from './modules/page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'/movies',
    pathMatch: 'full',
  },

  // MOVIES
  {
    path:'movies',
    canActivate: [MoviesGuard],
    loadChildren: () => import('./modules/movies/movies.module').then((m) => m.MoviesModule),
  },

  // LOGIN
  {
    path:'login',
    canActivate: [AuthGGuard],
    loadChildren: () => import('./modules/auth/auth.module').then((m) => m.AuthModule),
  },

  {
  path: '**',
   component: PageNotFoundComponent,
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
