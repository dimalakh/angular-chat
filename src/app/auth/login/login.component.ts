import { Component, OnInit } from '@angular/core';
import { Http, Response }  from '@angular/http';
import { AuthService } from '../auth.service';

@Component({
  selector: 'ct-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})

export class LoginComponent implements OnInit {

  constructor(private auth: AuthService) {}

  handleLogIn(name, password) {
      event.preventDefault();
      this.auth.logIn({'username': name, 'password': password}).subscribe( data => {
        localStorage.setItem('data', JSON.stringify(data));
      });
      console.log(1);
  }

  ngOnInit() {}
}
