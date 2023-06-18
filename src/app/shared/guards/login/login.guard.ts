import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../../services/auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(): boolean {
    const userIsLoggedIn = this.authService.currentUserExists();

  // if user is  logged in, take them to the movies page
    if(userIsLoggedIn){
      this.router.navigate(['/movies']);
    }
    return !userIsLoggedIn;
  }
}
