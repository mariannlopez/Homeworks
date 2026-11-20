// services/search-engine.service.ts
import { Injectable } from '@angular/core';
import { Trie } from './estructuras/trie/trie';
import { Producto } from './modelo/producto/producto';

@Injectable({ providedIn: 'root' })
export class SearchEngineService {
  private trie = new Trie();

  constructor() {
    this.seed();
  }

  insert(name: string, popularity: number): void {
    this.trie.insert(name, popularity);
  }

  searchTopK(prefix: string, k: number): Producto[] {
    return this.trie.searchTopK(prefix, k);
  }

  private seed(): void {
    this.insert('Estructuras de datos', 90);
    this.insert('Algoritmos', 95);
    this.insert('Challenge', 85);
    this.insert('Tries and heaps', 80);
  }
}