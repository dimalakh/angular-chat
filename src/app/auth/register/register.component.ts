import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';


@Component({
  selector: 'ct-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})

export class RegisterComponent  {
  constructor(private auth: AuthService, private router: Router) {}

  handleSignUp(userData) {
    this.auth.signUp(userData);
    this.router.navigate(['/auth/login']);
  }
}
 