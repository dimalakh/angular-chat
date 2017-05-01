import { NgModule } from '@angular/core';
import { SharedModule }  from '../shared';
import { AuthComponent } from './auth.component';
import { LoginComponent } from './login';
import { RegisterComponent } from './register';
import { AuthRoutingModule } from './auth-routing.module';
import { HttpModule, JsonpModule } from '@angular/http';
import { AuthService } from './auth.service';

@NgModule({
  declarations: [
    AuthComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    SharedModule,
    AuthRoutingModule,
    HttpModule,
    JsonpModule
  ],
  providers: [
    AuthService
  ]
})

export class AuthModule {}
