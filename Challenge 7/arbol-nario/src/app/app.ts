import { Component, Type } from '@angular/core';
import { NgComponentOutlet, NgTemplateOutlet } from '@angular/common';
import { Inicio } from './inicio/inicio';
import { Artistas } from './artistas/artistas';
import { Favoritos } from './favoritos/favoritos';
import { Playlist } from './playlist/playlist';

// Nodo N-ario
class Nodo {
  hijos: Nodo[] = [];
  constructor(public title: string, public link: string, public component: Type<any>) {}
  agregarHijo(nodo: Nodo) { this.hijos.push(nodo); }
}

@Component({
  selector: 'app-root',
  imports: [NgComponentOutlet, NgTemplateOutlet],
  templateUrl: './app.html',
})
export class App {
  raiz = new Nodo('Menú', '/', Inicio);
  actual: Type<any> = Inicio;

  constructor() {
    const biblioteca = new Nodo('Mi biblioteca', '/biblioteca', Favoritos);
    biblioteca.agregarHijo(new Nodo('Favoritos', '/biblioteca/favoritos', Favoritos));
    biblioteca.agregarHijo(new Nodo('Playlist', '/biblioteca/playlist', Playlist));

    this.raiz.agregarHijo(new Nodo('Inicio', '/inicio', Inicio));
    this.raiz.agregarHijo(new Nodo('Artistas', '/artistas', Artistas));
    this.raiz.agregarHijo(biblioteca);
  }
}