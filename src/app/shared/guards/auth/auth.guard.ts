import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../../services/auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(): boolean {
    const userIsLoggedIn = this.authService.currentUserExists();

  // if user isn't logged in, take them to login  page
    if(!userIsLoggedIn){
      this.router.navigate(['/login']);
    }
    return userIsLoggedIn;
  }
}
