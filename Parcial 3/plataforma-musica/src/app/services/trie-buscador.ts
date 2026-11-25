import { Injectable } from '@angular/core';
import { Cancion } from '../modelo/cancion';

class TrieNode {
  hijos = new Map<string, TrieNode>();
  esFin = false; 
  canciones: Cancion[] = [];
}

@Injectable({ providedIn: 'root' })
export class TrieBuscadorService {
  private raiz = new TrieNode();

  insertar(cancion: Cancion): void {
    let actual = this.raiz;
    const clave = cancion.titulo.trim().toLowerCase();

    for (const char of clave) {
      if (!actual.hijos.has(char)) {
        actual.hijos.set(char, new TrieNode());
      }
      actual = actual.hijos.get(char)!;
    }

    actual.esFin = true;
    actual.canciones.push(cancion);
  }

  buscarExacta(titulo: string): boolean {
    let actual = this.raiz;
    const clave = titulo.trim().toLowerCase();

    for (const char of clave) {
      if (!actual.hijos.has(char)) {
        return false;
      }
      actual = actual.hijos.get(char)!;
    }

    return actual.esFin;
  }

  sugerirPorPrefijo(prefijo: string): Cancion[] {
    const clave = prefijo.trim().toLowerCase();
    if (!clave) return [];

    let actual = this.raiz;
    for (const char of clave) {
      if (!actual.hijos.has(char)) {
        return [];
      }
      actual = actual.hijos.get(char)!;
    }

    const resultados: Cancion[] = [];
    this.recolectar(actual, resultados);
    return resultados;
  }

  private recolectar(nodo: TrieNode, resultados: Cancion[]): void {
    if (nodo.esFin) {
      resultados.push(...nodo.canciones);
    }
    for (const hijo of nodo.hijos.values()) {
      this.recolectar(hijo, resultados);
    }
  }
}