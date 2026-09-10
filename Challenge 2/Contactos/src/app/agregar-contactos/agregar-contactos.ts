import { Component, EventEmitter, Output, signal } from '@angular/core';

@Component({
  selector: 'app-agregar-contactos',
  imports: [],
  templateUrl: './agregar-contactos.html',
  styleUrl: './agregar-contactos.css',
})
export class AgregarContactos {

  @Output() agregar = new EventEmitter<any>();

  nombre = signal('');
  telefono = signal('');

  capturarNombre(e: any) {
    this.nombre.set(e.target.value);
  }

  capturarTelefono(e: any) {
    this.telefono.set(e.target.value);
  }

  agregarContacto() {
    if (this.nombre().trim() && this.telefono().trim()) {
      this.agregar.emit({ nombre: this.nombre(), telefono: this.telefono() });
      this.nombre.set('');
      this.telefono.set('');
    }
  }
}