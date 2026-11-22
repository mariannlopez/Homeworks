
import { Component, input } from '@angular/core';
import { Producto } from '../../modelo/producto/producto';

@Component({
  selector: 'app-lista',
  imports: [],
  templateUrl: './lista.html',
  styleUrl: './lista.css',
})
export class Lista {
  products = input.required<Producto[]>();
}