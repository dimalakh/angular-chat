import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core/core.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home.component';
import { PageNotFoundComponent } from './not-found.component';
import { AuthGuard } from './shared/auth.guard';
import { ContentGuard } from './shared/content.guard';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    CoreModule,
    AppRoutingModule,
  ],
  providers: [
    AuthGuard,
    ContentGuard
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
