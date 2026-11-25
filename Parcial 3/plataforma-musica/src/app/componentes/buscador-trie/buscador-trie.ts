import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Cancion } from '../../modelo/cancion';
import { TrieBuscadorService } from '../../services/trie-buscador';

export interface NuevaCancionPayload {
  titulo: string;
  artista: string;
  reproducciones: number;
}

@Component({
  selector: 'app-buscador-trie',
  imports: [CommonModule, FormsModule],
  templateUrl: './buscador-trie.html',
  styleUrl: './buscador-trie.scss',
})
export class BuscadorTrie {
  @Input() sugerencias: Cancion[] = [];
  @Output() consultarPrefijo = new EventEmitter<string>();
  @Output() seleccionarCancion = new EventEmitter<Cancion>();
  @Output() insertarCancion = new EventEmitter<NuevaCancionPayload>();

  consulta = '';
  busquedaRealizada = false;
  existeResultado = false;

  nuevoTitulo = '';
  nuevoArtista = '';
  nuevasReproducciones: number | null = null;
  mensajeInsercion = '';

  constructor(private trie: TrieBuscadorService) {}

  alEscribirPrefijo(valor: string): void {
    this.consulta = valor;
    const limpio = valor.trim();

    if (!limpio) {
      this.busquedaRealizada = false;
      this.existeResultado = false;
      this.consultarPrefijo.emit('');
      return;
    }

    this.busquedaRealizada = true;
    this.existeResultado = this.trie.buscarExacta(limpio);
    this.consultarPrefijo.emit(limpio);
  }

  verificarExistencia(): void {
    const limpio = this.consulta.trim();
    if (!limpio) {
      this.busquedaRealizada = false;
      this.existeResultado = false;
      return;
    }

    this.busquedaRealizada = true;
    this.existeResultado = this.trie.buscarExacta(limpio);
    this.consultarPrefijo.emit(limpio);
  }

  elegirSugerencia(cancion: Cancion): void {
    this.consulta = cancion.titulo;
    this.busquedaRealizada = true;
    this.existeResultado = true;
    this.seleccionarCancion.emit(cancion);
  }

  guardarCancion(): void {
    const titulo = this.nuevoTitulo.trim();
    const artista = this.nuevoArtista.trim();
    const reproducciones = Number(this.nuevasReproducciones ?? 0);

    if (!titulo || !artista || reproducciones < 0) {
      return;
    }

    this.insertarCancion.emit({
      titulo,
      artista,
      reproducciones,
    });

    this.mensajeInsercion = `Se agregó "${titulo}".`;
    this.nuevoTitulo = '';
    this.nuevoArtista = '';
    this.nuevasReproducciones = null;

    if (this.consulta.trim()) {
      this.verificarExistencia();
    }
  }
}