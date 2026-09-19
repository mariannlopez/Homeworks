import { Routes } from '@angular/router';
import { Listadoble } from './listadoble/listadoble';
import { Listaenlazada } from './listaenlazada/listaenlazada';
export const routes: Routes = [
    {path: '', component: Listaenlazada},
    {path: 'Lista doblemente enlazada', component: Listadoble},
    {path: 'Redirigir si la ruta no existe', redirectTo: ''}
];
