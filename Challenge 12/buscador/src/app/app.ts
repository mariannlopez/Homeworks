
import { Component } from '@angular/core';
import { Busqueda } from './componentes/busqueda/busqueda';

@Component({
  selector: 'app-root',
  imports: [Busqueda],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {}