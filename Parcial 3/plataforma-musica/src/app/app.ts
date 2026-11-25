import { Component, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Cancion } from './modelo/cancion';
import { RankingHeapService } from './services/ranking-heap';
import { GrafoService } from './services/grafo';
import { TrieBuscadorService } from './services/trie-buscador';
import { PanelRanking } from './componentes/panel-ranking/panel-ranking';
import { Grafo } from './componentes/grafo/grafo';
import {
  BuscadorTrie,
  NuevaCancionPayload,
} from './componentes/buscador-trie/buscador-trie';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, PanelRanking, Grafo, BuscadorTrie],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App implements OnInit {
  protected readonly title = signal('plataforma-musica');

  catalogo: Cancion[] = [
    { id: '1', titulo: 'The Adults are Talking', artista: 'The Strokes', reproducciones: 896000 },
    { id: '2', titulo: 'Awake', artista: 'BTS - Jin', reproducciones: 169000 },
    { id: '3', titulo: 'Art Deco', artista: 'Lana del Rey', reproducciones: 663000 },
    { id: '4', titulo: 'Dynamite', artista: 'BTS', reproducciones: 2389000 },
    { id: '5', titulo: 'In your eyes', artista: 'The Weeknd', reproducciones: 1176000 },
    { id: '6', titulo: 'So What', artista: 'BTS', reproducciones: 240000 },
    { id: '7', titulo: 'La Luna', artista: 'Jósean log', reproducciones: 77000 },
    { id: '8', titulo: 'Afraid', artista: 'The neighbourhood', reproducciones: 695000 },
    { id: '9', titulo: 'REDRED', artista: 'Cortis', reproducciones: 289000 },
    { id: '10', titulo: 'Do I Wanna Know', artista: 'Arctic Monkeys', reproducciones: 3237000 },
  ];

  topCanciones: Cancion[] = [];
  sugerencias: Cancion[] = [];
  cancionSeleccionada: Cancion | null = null;
  relacionadas: Cancion[] = [];

  private prefijoActual = '';

  constructor(
    private ranking: RankingHeapService,
    private grafo: GrafoService,
    private trie: TrieBuscadorService
  ) {}

  ngOnInit(): void {
    for (const cancion of this.catalogo) {
      this.ranking.insertar(cancion);
      this.grafo.agregarCancion(cancion.id);
      this.trie.insertar(cancion);
    }

    this.grafo.conectar('4', '6');
    this.grafo.conectar('2', '4');
    this.grafo.conectar('1', '8');
    this.grafo.conectar('8', '10');
    this.grafo.conectar('1', '10');
    this.grafo.conectar('3', '7');
    this.grafo.conectar('3', '5');
    this.grafo.conectar('5', '9');
    this.grafo.conectar('9', '4');

    this.topCanciones = this.ranking.obtenerTop(5);
    this.onCancionSeleccionada(this.catalogo[0]);
  }

  onConsultarPrefijo(prefijo: string): void {
    this.prefijoActual = prefijo;
    this.sugerencias = this.trie.sugerirPorPrefijo(prefijo);
  }

  onInsertarCancion(payload: NuevaCancionPayload): void {
    const nuevaCancion: Cancion = {
      id: String(this.catalogo.length + 1),
      titulo: payload.titulo,
      artista: payload.artista,
      reproducciones: payload.reproducciones,
    };

    this.catalogo = [...this.catalogo, nuevaCancion];
    this.ranking.insertar(nuevaCancion);
    this.grafo.agregarCancion(nuevaCancion.id);
    this.trie.insertar(nuevaCancion);

    this.topCanciones = this.ranking.obtenerTop(5);

    if (this.prefijoActual) {
      this.sugerencias = this.trie.sugerirPorPrefijo(this.prefijoActual);
    }
  }

  onCancionSeleccionada(cancion: Cancion): void {
    this.cancionSeleccionada = cancion;
    const ids = this.grafo.recomendarIds(cancion.id, 4);
    this.relacionadas = this.catalogo.filter((c) => ids.includes(c.id));
  }

  onConectarCanciones(par: { idA: string; idB: string }): void {
    this.grafo.conectar(par.idA, par.idB);
    if (this.cancionSeleccionada) {
      this.onCancionSeleccionada(this.cancionSeleccionada);
    }
  }
}