import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Cancion } from '../../modelo/cancion';

@Component({
  selector: 'app-panel-ranking',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './panel-ranking.html',
  styleUrl: './panel-ranking.scss',
})
export class PanelRanking {
  @Input() topCanciones: Cancion[] = [];
  @Input() cancionActivaId: string | null = null;
  @Output() cancionSeleccionada = new EventEmitter<Cancion>();

  seleccionarCancion(cancion: Cancion): void {
    this.cancionSeleccionada.emit(cancion);
  }
}