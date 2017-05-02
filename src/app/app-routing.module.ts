import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';
import { HomeComponent } from './home.component';
import { PageNotFoundComponent }   from './not-found.component';
import { AuthGuard } from './shared/auth.guard';
import { ContentGuard } from './shared/content.guard';

const appRoutes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'chat',
    canActivate: [ContentGuard],
    loadChildren: 'app/chats/chats.module#ChatsModule'
  },
  {
    path: 'auth',
    canActivate: [AuthGuard],
    loadChildren: 'app/auth/auth.module#AuthModule'
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { preloadingStrategy: PreloadAllModules }
    )
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule {}
