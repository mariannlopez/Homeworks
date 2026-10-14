export type TipoNodo = 'carpeta' | 'archivo';

export class Nodo {
  hijos: Nodo[] = [];

  constructor(
    public id: string,
    public nombre: string,
    public tipo: TipoNodo,
    public creadoPor: string
  ) {}

  agregarHijo(hijo: Nodo): void {
    if (this.tipo === 'archivo') {
      throw new Error('Un archivo no puede tener hijos.');
    }
    this.hijos.push(hijo);
  }

  buscar(id: string): Nodo | null {
    if (this.id === id) return this;
    for (const h of this.hijos) {
      const encontrado = h.buscar(id);
      if (encontrado) return encontrado;
    }
    return null;
  }
}