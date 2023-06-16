import { Component } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth/auth.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent {
constructor(
  private authService: AuthService,
){

}

logout(){
  // log the user out
  this.authService.logout();
}
}
