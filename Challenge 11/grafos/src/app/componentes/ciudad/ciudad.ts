import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { GraphService } from '../../serrvice';

@Component({
  selector: 'app-ciudad-form',
  imports: [FormsModule],
  templateUrl: './ciudad.html',
})
export class CiudadFormComponent {
  private graphService = inject(GraphService);

  nombre = '';
  mensaje = '';

  agregar() {
    const ok = this.graphService.addCiudad(this.nombre);
    this.mensaje = ok ? 'Ciudad agregada' : 'Nombre vacío o la ciudad ya existe';
    if (ok) this.nombre = '';
  }
}