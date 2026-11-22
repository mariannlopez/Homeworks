import { Component } from '@angular/core';
import { GifSearchComponent } from './componentes/buscador-gif/buscador-gif';

@Component({
  selector: 'app-root',
  imports: [GifSearchComponent],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {}