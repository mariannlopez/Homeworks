import { GraphNode, TipoNodo } from './nodo';

export class Graph {
  private nodes: GraphNode[] = [];
  private adjacency: Record<string, string[]> = {};

  addNode(node: GraphNode): boolean {
    if (this.searchNode(node.id)) return false;
    this.nodes.push(node);
    this.adjacency[node.id] = [];
    return true;
  }

  searchNode(id: string): GraphNode | undefined {
    return this.nodes.find(n => n.id === id);
  }

  addEdge(a: string, b: string): boolean {
    if (!this.searchNode(a) || !this.searchNode(b)) return false;
    if (!this.adjacency[a].includes(b)) this.adjacency[a].push(b);
    if (!this.adjacency[b].includes(a)) this.adjacency[b].push(a); // no dirigido
    return true;
  }

  printAdjacency(id: string): GraphNode[] {
    return (this.adjacency[id] ?? []).map(i => this.searchNode(i)!);
  }

  isEmpty(): boolean {
    return this.nodes.length === 0;
  }

  removeNode(id: string): void {
    this.nodes = this.nodes.filter(n => n.id !== id);
    delete this.adjacency[id];
    for (const key in this.adjacency) {
      this.adjacency[key] = this.adjacency[key].filter(x => x !== id);
    }
  }

  print(): void {
    console.log(this.nodes, this.adjacency);
  }


  
  toGraphData() {
    const links: { source: string; target: string }[] = [];
    for (const a in this.adjacency) {
      for (const b of this.adjacency[a]) {
        if (a < b) links.push({ source: a, target: b }); // evita duplicados
      }
    }
    return { nodes: this.nodes.map(n => ({ ...n })), links };
  }
getNodesByType(tipo: TipoNodo): GraphNode[] {
  return this.nodes.filter(n => n.tipo === tipo);
}

getPersonasPorCiudad(ciudadId: string): GraphNode[] {
  return this.printAdjacency(ciudadId).filter(n => n.tipo === 'persona');
}
}
