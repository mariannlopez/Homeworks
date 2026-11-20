import { Injectable, signal } from '@angular/core';
import { Graph } from './modelo/grafo';
import { GraphNode } from './modelo/nodo';

@Injectable({ providedIn: 'root' })
export class GraphService {
  private graph = new Graph();
  private contadorPersonas = 0;

  graphData = signal(this.graph.toGraphData());
  ciudades = signal<GraphNode[]>([]);

  addCiudad(nombre: string): boolean {
    const limpio = nombre.trim();
    if (!limpio) return false;
    const agregada = this.graph.addNode({
      id: 'ciudad-' + limpio.toLowerCase(),
      tipo: 'ciudad',
      nombre: limpio,
    });
    if (agregada) this.refresh();
    return agregada;
  }

  addPersona(nombre: string, edad: number, ciudadId: string): boolean {
    if (!nombre.trim() || !this.graph.searchNode(ciudadId)) return false;
    const id = 'persona-' + ++this.contadorPersonas;
    this.graph.addNode({ id, tipo: 'persona', nombre: nombre.trim(), edad });
    this.graph.addEdge(id, ciudadId);
    this.refresh();
    return true;
  }

  getPersonasPorCiudad(ciudadId: string): GraphNode[] {
    return this.graph.getPersonasPorCiudad(ciudadId);
  }

  private refresh(): void {
    this.graphData.set(this.graph.toGraphData());
    this.ciudades.set(this.graph.getNodesByType('ciudad'));
  }
}