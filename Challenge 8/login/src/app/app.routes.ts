import { Routes } from '@angular/router';
import { Login } from './login/login';
import { Artistas } from './artistas/artistas';
import { Favoritos } from './favoritos/favoritos';
import { authGuard } from './auth.guard';

export const routes: Routes = [
  { path: 'login', component: Login },
  { path: 'artistas', component: Artistas, canActivate: [authGuard] },
  { path: 'favoritos', component: Favoritos, canActivate: [authGuard] },
  { path: '**', redirectTo: 'login' },
];