import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './modules/page-not-found/page-not-found.component';
import { AuthGuard } from './shared/guards/auth/auth.guard';
import { LoginGuard } from './shared/guards/login/login.guard';

const routes: Routes = [
  {
    path:'',
    redirectTo:'/movies',
    pathMatch: 'full',
  },

  // MOVIES
  {
    path:'movies',
    canActivate: [AuthGuard],
    loadChildren: () => import('./modules/movies/movies.module').then((m) => m.MoviesModule),
  },

  // SEARCH
  {
    path:'search',
    canActivate: [AuthGuard],
    loadChildren: () => import('./modules/search/search.module').then((m) => m.SearchModule),
  },

  // LOGIN
  {
    path:'login',
    canActivate: [LoginGuard],
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
