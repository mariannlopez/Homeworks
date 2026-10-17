import { Routes } from '@angular/router';
import { Acceso } from './acceso/acceso';
import { CrearCuenta } from './crear-cuenta/crear-cuenta';
import { MisTareas } from './mis-tareas/mis-tareas';
import { PaginaNoEncontrada } from './pagina-no-encontrada/pagina-no-encontrada';

export const routes: Routes = [
    {path: '', redirectTo: 'inicio', pathMatch: 'full'},
    {path: 'inicio', component: Acceso},
    {path: 'registro', component: CrearCuenta},
    {path: 'tareas', component: MisTareas},
    {path: '**', component: PaginaNoEncontrada}
];
