import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PilaLibros } from './pila-libros/pila-libros';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, PilaLibros],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('pila-libros');
}
