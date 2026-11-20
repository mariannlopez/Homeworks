import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { GraphService } from '../../serrvice';

@Component({
  selector: 'app-persona-form',
  imports: [FormsModule],
  templateUrl: './persona.html',
})
export class PersonaFormComponent {
  private graphService = inject(GraphService);

  ciudades = this.graphService.ciudades; // el signal, se actualiza solo

  nombre = '';
  edad: number | null = null;
  ciudadId = '';
  mensaje = '';

  agregar() {
    if (this.edad === null) {
      this.mensaje = 'Falta la edad';
      return;
    }
    const ok = this.graphService.addPersona(this.nombre, this.edad, this.ciudadId);
    this.mensaje = ok ? 'Persona agregada' : 'Revisa nombre y ciudad';
    if (ok) {
      this.nombre = '';
      this.edad = null;
    }
  }
}