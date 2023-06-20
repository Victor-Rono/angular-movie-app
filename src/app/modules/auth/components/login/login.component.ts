import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators, } from '@angular/forms';
import { AuthService } from 'src/app/shared/services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

// login form  
loginForm: FormGroup = new FormGroup({
  email: new FormControl<string | null>(null, [Validators.required, Validators.email]),
  password: new FormControl<string | null>(null),
});

constructor(
  private authService:AuthService,
){

}


// submit login data
submit(){
  this.authService.login(this.loginForm.value);
}
}
