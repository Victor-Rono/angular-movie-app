import { Component } from '@angular/core';
import { authSelector } from './STATE/auth/auth.selectors';
import { Store } from '@ngrx/store';

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
  ){
  this.store.select(authSelector).subscribe((auth)=>{
    this.user = auth;
  });
  }
}
