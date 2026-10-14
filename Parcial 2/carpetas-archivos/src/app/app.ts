import { Arbol } from './services/arbol';
import { NodoComponent } from './nodo/nodo';
import { NgComponentOutlet, NgTemplateOutlet } from '@angular/common';
import { Component, inject } from '@angular/core';

//Probar en Chrome no en visual para que salga el campo que pide el nombre del archivo o carpeta
@Component({
  selector: 'app-root',
  imports: [NodoComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})

export class App {
  arbol = inject(Arbol);
  async entrar(correo: string, clave: string) {
  try {
    await this.arbol.login(correo, clave);
  } catch {
    alert('Correo o clave incorrectos.');
  }
}}

