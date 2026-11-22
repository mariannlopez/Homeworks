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

  // Búsqueda
  query = signal('');
  k = signal(3);
  mostrarTodos = signal(false);

 
  nuevoNombre = signal('');
  nuevaPopularidad = signal(0);
  mensaje = signal('');

  private version = signal(0);

  results = computed(() => {
    this.version(); // dependencia: se recalcula al insertar
    const k = this.mostrarTodos() ? Infinity : this.k();
    return this.engine.searchTopK(this.query().trim(), k);
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