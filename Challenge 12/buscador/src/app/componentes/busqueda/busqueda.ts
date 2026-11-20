// componentes/busqueda/busqueda.ts
import { Component, computed, inject, signal } from '@angular/core';
import { SearchEngineService } from '../../service';
import { Lista } from '../lista/lista';

@Component({
  selector: 'app-busqueda',
  imports: [Lista],
  templateUrl: './busqueda.html',
  styleUrl: './busqueda.css',
})
export class Busqueda {
  private engine = inject(SearchEngineService);

  query = signal('');
  k = signal(3);

  // Campos del formulario para agregar
  nuevoNombre = signal('');
  nuevaPopularidad = signal(0);
  mensaje = signal('');

  // Sirve para avisarle a "results" que el Trie cambió
  private version = signal(0);

  results = computed(() => {
    this.version(); // dependencia: se recalcula cuando se inserta algo
    return this.query().trim()
      ? this.engine.searchTopK(this.query(), this.k())
      : [];
  });

  agregar(): void {
    const nombre = this.nuevoNombre().trim();
    const popularidad = this.nuevaPopularidad();

    if (!nombre || !Number.isFinite(popularidad)) {
      this.mensaje.set('Escribe un nombre y una popularidad válida');
      return;
    }

    this.engine.insert(nombre, popularidad);
    this.version.update((v) => v + 1);

    this.mensaje.set(`"${nombre}" agregado con popularidad ${popularidad}`);
    this.nuevoNombre.set('');
    this.nuevaPopularidad.set(0);
  }
}