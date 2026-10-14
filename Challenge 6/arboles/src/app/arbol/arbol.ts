import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import * as d3 from 'd3';

class Nodo {
  izquierda: Nodo | null = null;
  derecha: Nodo | null = null;
  constructor(public valor: number) {}
}

class ArbolBinario {
  raiz: Nodo | null = null;

  insertar(valor: number) {
    const nuevoNodo = new Nodo(valor);
    if (!this.raiz) { this.raiz = nuevoNodo; return; }

    let actual = this.raiz;
    while (true) {
      if (valor === actual.valor) return; // no se permiten repetidos
      if (valor < actual.valor) {
        if (!actual.izquierda) { actual.izquierda = nuevoNodo; return; }
        actual = actual.izquierda;
      } else {
        if (!actual.derecha) { actual.derecha = nuevoNodo; return; }
        actual = actual.derecha;
      }
    }
  }

  preOrder(n = this.raiz): number[] {
    return n ? [n.valor, ...this.preOrder(n.izquierda), ...this.preOrder(n.derecha)] : [];
  }
  inOrder(n = this.raiz): number[] {
    return n ? [...this.inOrder(n.izquierda), n.valor, ...this.inOrder(n.derecha)] : [];
  }
  postOrder(n = this.raiz): number[] {
    return n ? [...this.postOrder(n.izquierda), ...this.postOrder(n.derecha), n.valor] : [];
  }

  existe(valor: number, n = this.raiz): boolean {
    if (!n) return false;
    if (valor === n.valor) return true;
    return this.existe(valor, valor < n.valor ? n.izquierda : n.derecha);
  }

  // formato de react-d3-tree: { name, children }
  aFormatoD3(n = this.raiz): any {
    if (!n) return null;
    const children = [n.izquierda, n.derecha].filter(h => h).map(h => this.aFormatoD3(h));
    return { name: String(n.valor), children };
  }
}

@Component({
  selector: 'app-arbol',
  template: `
    <svg #svg style="display:block; width:100%; height:450px"></svg>

    <textarea [value]="salida" rows="8" readonly
      style="width:100%; font-family:monospace"></textarea>

    <div>
      <input #valor type="number" placeholder="Valor a buscar">
      <button (click)="buscar(valor.value)">Verificar</button>
    </div>
  `,
})
export class Arbol implements OnInit, AfterViewInit {
  @ViewChild('svg') svg!: ElementRef<SVGSVGElement>;

  arbol = new ArbolBinario();
  salida = '';

  ngOnInit() {
    [50, 30, 70, 20, 40, 60, 80].forEach(n => this.arbol.insertar(n));

    this.salida =
      'InOrder:   ' + this.arbol.inOrder().join(' - ') + '\n' +
      'PostOrder: ' + this.arbol.postOrder().join(' - ') + '\n' +
      'PreOrder:  ' + this.arbol.preOrder().join(' - ') + '\n';
  }

  buscar(valor: string) {
    if (valor === '') return;
    const v = Number(valor);
    this.salida += `¿Existe ${v}? ${this.arbol.existe(v) ? 'Sí' : 'No'}\n`;
  }

  ngAfterViewInit() {
    const raiz = d3.hierarchy(this.arbol.aFormatoD3());
    d3.tree().size([720, 370])(raiz);

    const g = d3.select(this.svg.nativeElement)
      .attr('viewBox', '0 0 800 450')
      .append('g').attr('transform', 'translate(40,40)');

    g.selectAll('path').data(raiz.links()).join('path')
      .attr('fill', 'none').attr('stroke', '#999')
      .attr('d', d3.linkVertical<any, any>().x(d => d.x).y(d => d.y));

    const nodo = g.selectAll('g').data(raiz.descendants()).join('g')
      .attr('transform', (d: any) => `translate(${d.x},${d.y})`);

    nodo.append('circle').attr('r', 18).attr('fill', '#4f46e5');
    nodo.append('text').attr('text-anchor', 'middle').attr('dy', '0.35em')
      .attr('fill', 'white').text((d: any) => d.data.name);
  }
}