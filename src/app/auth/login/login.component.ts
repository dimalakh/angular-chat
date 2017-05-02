import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'ct-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})

export class LoginComponent {
  constructor(private auth: AuthService, private router: Router) {}

  handleLogIn(userData) {
    event.preventDefault();
    this.auth.logIn(userData).subscribe( data => {
      localStorage.setItem('data', JSON.stringify(data));
      this.router.navigate(['/chat']);
    });
  }
}
