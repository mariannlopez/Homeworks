import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-eliminar-contactos',
  imports: [],
  templateUrl: './eliminar-contactos.html',
  styleUrl: './eliminar-contactos.css',
})
export class EliminarContactos {

  @Input() nombre: string = '';
  @Output() eliminar = new EventEmitter<string>();

  eliminarContacto() {
    this.eliminar.emit(this.nombre);
  }
}