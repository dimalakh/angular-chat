import { Component } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'ct-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})

export class LoginComponent {
  constructor(private auth: AuthService) {}

  handleLogIn(userData) {
    event.preventDefault();
    this.auth.logIn(userData).subscribe( data => {
      localStorage.setItem('data', JSON.stringify(data));
    });
  }
}
