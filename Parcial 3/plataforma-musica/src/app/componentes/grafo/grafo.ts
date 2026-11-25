import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Cancion } from '../../modelo/cancion';

@Component({
  selector: 'app-grafo',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './grafo.html',
  styleUrl: './grafo.scss',
})
export class Grafo {
  @Input() cancionBase: Cancion | null = null;
  @Input() relacionadas: Cancion[] = [];
  @Input() catalogo: Cancion[] = [];

  @Output() cancionSeleccionada = new EventEmitter<Cancion>();
  @Output() conectarCanciones = new EventEmitter<{ idA: string; idB: string }>();

  idDestinoSeleccionado = '';

  seleccionarCancion(cancion: Cancion): void {
    this.cancionSeleccionada.emit(cancion);
  }

  conectarConBase(): void {
    if (!this.cancionBase || !this.idDestinoSeleccionado) return;
    if (this.cancionBase.id === this.idDestinoSeleccionado) return;

    this.conectarCanciones.emit({
      idA: this.cancionBase.id,
      idB: this.idDestinoSeleccionado,
    });

    this.idDestinoSeleccionado = '';
  }
}