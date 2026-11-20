export type TipoNodo = 'persona' | 'ciudad';

export interface GraphNode {
  id: string;
  tipo: TipoNodo;
  nombre: string;
  edad?: number; // solo personas
}