import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CiudadFormComponent } from './componentes/ciudad/ciudad';
import { PersonaFormComponent } from './componentes/persona/persona';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CiudadFormComponent, PersonaFormComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('grafos');
}
