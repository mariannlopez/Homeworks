import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GestionPacientes } from './gestion-pacientes/gestion-pacientes';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, GestionPacientes],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('my-app');
}
