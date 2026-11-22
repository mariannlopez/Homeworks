import { Injectable, signal } from '@angular/core';
import { environment } from './../environments/environments';
import { Gif, GiphySearchResponse } from './modelos/modelo-gif';

@Injectable({ providedIn: 'root' })
export class GiphyService {
  gifs = signal<Gif[]>([]);
  cargando = signal(false);
  error = signal<string | null>(null);

  private controller?: AbortController;

  async buscar(termino: string) {
    const q = termino.trim();
    if (!q) {
      this.gifs.set([]);
      return;
    }

    this.controller?.abort();
    const controller = new AbortController();
    this.controller = controller;

    this.cargando.set(true);
    this.error.set(null);

    const params = new URLSearchParams({
      api_key: environment.giphyApiKey,
      q,
      limit: '25',
      offset: '0',
      rating: 'g',
      lang: 'en',
    });

    try {
      const res = await fetch(`${environment.apiUrl}/gifs/search?${params}`, {
        signal: controller.signal,
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const json: GiphySearchResponse = await res.json();
      this.gifs.set(json.data);
    } catch (e) {
      if ((e as Error).name === 'AbortError') return;
      this.error.set('No se pudieron cargar los GIFs');
    } finally {
      if (this.controller === controller) this.cargando.set(false);
    }
  }
}