import { Component, inject, input } from '@angular/core';
import { Nodo } from '../models/nodo';
import { Arbol } from '../services/arbol';


@Component({
  selector: 'app-nodo',
  templateUrl: './nodo.html',
  styleUrl: './nodo.css'
})

export class NodoComponent {
  nodo = input.required<Nodo>();
  arbol = inject(Arbol);


 agregar(tipo: 'carpeta' | 'archivo') {
    const nombre = prompt(`Nombre del ${tipo}:`);
    if (!nombre) return;
    try {
      this.arbol.crear(this.nodo().id, nombre, tipo);
    } catch (e: any) {
      alert(e.message);
    }
  }
}
