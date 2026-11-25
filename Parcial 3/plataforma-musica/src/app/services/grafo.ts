import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class GrafoService {
  private adyacencia = new Map<string, Set<string>>();

  agregarCancion(idCancion: string): void {
    if (!this.adyacencia.has(idCancion)) {
      this.adyacencia.set(idCancion,new Set<string>());
    }
  }

  conectar(idA: string, idB: string): void {
    if (idA === idB) return;
    this.agregarCancion(idA);
    this.agregarCancion(idB);
    this.adyacencia.get(idA)!.add(idB);
    this.adyacencia.get(idB)!.add(idA);
  }

  recomendarIds(idInicio: string, limite = 4): string[] {
    if (!this.adyacencia.has(idInicio)) return [];

    const visitados = new Set<string>([idInicio]);
    const cola: string[] = [idInicio];
    const recomendados: string[] = [];

    while (cola.length > 0 && recomendados.length < limite) {
      const actual = cola.shift()!;
      const vecinos = this.adyacencia.get(actual) ?? new Set<string>();

      for (const vecino of vecinos) {
        if (!visitados.has(vecino)) {
          visitados.add(vecino);
          recomendados.push(vecino);
          cola.push(vecino);
          if (recomendados.length >= limite) break;
        }
      }
    }

    return recomendados;
  }
}