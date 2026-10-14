import { Component, signal } from '@angular/core';
import { Arbol } from './arbol/arbol';

@Component({
  selector: 'app-root',
  imports: [Arbol],
  templateUrl: './app.html',

})
export class App {
  protected readonly title = signal('arboles');
}
