import { Component } from '@angular/core';
import { AuthService } from '../auth.service';


@Component({
  selector: 'ct-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})

export class RegisterComponent  {
  constructor(private auth: AuthService) {}

  handleSignUp(userData) {
    this.auth.signUp(userData);
  }

}
