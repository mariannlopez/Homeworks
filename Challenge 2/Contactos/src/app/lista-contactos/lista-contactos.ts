import { Component, EventEmitter, Input, Output } from '@angular/core';
import { EliminarContactos } from '../eliminar-contactos/eliminar-contactos';

@Component({
  selector: 'app-lista-contactos',
  imports: [EliminarContactos],
  templateUrl: './lista-contactos.html',
  styleUrl: './lista-contactos.css',
})
export class ListaContactos {

  @Input() contactos: any[] = [];
  @Output() eliminar = new EventEmitter<string>();
}