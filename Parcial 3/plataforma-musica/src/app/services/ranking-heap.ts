import { Injectable } from '@angular/core';
import { Cancion } from '../modelo/cancion';

@Injectable({ providedIn: 'root' })
export class RankingHeapService {
  private heap: Cancion[] = [];

  insertar(cancion: Cancion): void {
    this.heap.push(cancion);
    this.siftUp(this.heap.length - 1);
  }

  extraerMax(): Cancion | undefined {
    if (this.heap.length === 0) return undefined;
    const max = this.heap[0];
    const ultimo = this.heap.pop()!;

    if (this.heap.length > 0) {
      this.heap[0] = ultimo;
      this.siftDown(0);
    }
    return max;
  }

  obtenerTop(limite = 10): Cancion[] {
    const copia = [...this.heap];
    const top: Cancion[] = [];

    while (top.length < limite && this.heap.length > 0) {
      const max = this.extraerMax();
      if (max) top.push(max);
    }

   
    this.heap = copia;
    return top;
  }

  private siftUp(index: number): void {
    while (index > 0) {
      const padre = Math.floor((index - 1) / 2);
      if (this.heap[index].reproducciones <= this.heap[padre].reproducciones) {
        break;
      }
      [this.heap[index], this.heap[padre]] = [this.heap[padre], this.heap[index]];
      index = padre;
    }
  }

  private siftDown(index: number): void {
    const n = this.heap.length;
    while (true) {
      const izq = 2 * index + 1;
      const der = 2 * index + 2;
      let mayor = index;

      if (izq < n && this.heap[izq].reproducciones > this.heap[mayor].reproducciones) {
        mayor = izq;
      }
      if (der < n && this.heap[der].reproducciones > this.heap[mayor].reproducciones) {
        mayor = der;
      }
      if (mayor === index) break;

      [this.heap[index], this.heap[mayor]] = [this.heap[mayor], this.heap[index]];
      index = mayor;
    }
  }
}