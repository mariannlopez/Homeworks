import { Routes } from '@angular/router';
import { authGuard } from './guards/auth-guard';
import { LoginComponent } from './paginas/login/login';
import { TareasComponent } from './paginas/tareas/tareas';
import { PerfilComponent } from './paginas/perfil/perfil';

export const routes: Routes = [
  { path: '', redirectTo: 'tareas', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'tareas', component: TareasComponent, canActivate: [authGuard] },
  { path: 'perfil', component: PerfilComponent, canActivate: [authGuard] }
];