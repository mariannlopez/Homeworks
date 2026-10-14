import { Component, signal } from '@angular/core';
import { ColaClientes } from './cola-clientes/cola-clientes';

@Component({
  selector: 'app-root',
  imports: [ColaClientes],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('cola-cajero');
}
