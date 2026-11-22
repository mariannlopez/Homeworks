import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { GiphyService } from '../../services';

@Component({
  selector: 'app-gif-search',
  imports: [FormsModule],
  templateUrl: './buscador-gif.html',
  styleUrl: './buscador-gif.css',
})
export class GifSearchComponent {
  giphy = inject(GiphyService);
  termino = '';
  private timer?: ReturnType<typeof setTimeout>;

  onInput() {
    clearTimeout(this.timer);
    this.timer = setTimeout(() => this.giphy.buscar(this.termino), 400);
  }
}