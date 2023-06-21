import { Injectable } from '@angular/core';
import { NotificationService } from '../notification/notification.service';
import { Store } from '@ngrx/store';
import { setAuthAction } from 'src/app/STATE/auth/auth.actions';
import { Router } from '@angular/router';
import { LoginInterface } from '../../interfaces/login.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private notificationService: NotificationService,
    private store: Store,
    private router: Router,
  ) { }

  login(user: LoginInterface){
    const storedEmail = 'kepha123@gmail.com';
    const storedPassword = '123123';

    if(user.email !== storedEmail || user.password  !== storedPassword){
      this.notificationService.showError({message: 'Wrong Email or Password'});
      return;
    }

    // save the user to state and Local storage
    this.saveUser(user);

    // notify user they're logged in
    this.notificationService.showSuccess({message:'Login Successful'});
    // redirect user to movies page
    this.router.navigate(['/upcoming-movies']);

  }

  saveUser(user: {email: string}){
    // save user to state
    this.store.dispatch(setAuthAction({auth: user}));
    // save user to local storage
    localStorage.setItem('user',user.email);
  }

  currentUserExists(): boolean{
    // get user from local storage and save to state
      const userInLocalStorage = localStorage.getItem('user');
    let userExists = false;
    if(userInLocalStorage){
      // Save User to state
      this.saveUser({email:userInLocalStorage});
      userExists = true;
    }
    return userExists;
  }

  logout(){
    // set user state to null
    this.store.dispatch(setAuthAction({auth:null}));

    // clear local storage to remove user
    localStorage.clear();

    // redirect usee to login page
    this.router.navigate(['/login']);

  }
}
