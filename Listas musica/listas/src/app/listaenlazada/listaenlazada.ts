import { Component } from '@angular/core';

class Node {
  value: string;
  next: Node | null;

  constructor(value: string){
    this.value = value;
    this.next = null;
  }
}


class LinkedList {
  head: Node | null;
  tail: Node | null;
  length: number;

  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
//Para agregar las canciones 
  append(value: string): void {
    const newNode = new Node(value);

    if (!this.head){
      this.head = newNode;
    } else{
      this.tail!.next = newNode
    }
    this.tail = newNode
    this.length ++;
  }

  //Para mostrar la canción
  peek(value: string, current = this.head) {
    while (current) {
      if (current.value === value) {
        return current;
      }
      current = current.next;
    }
    return null;
  }
}
@Component({
  selector: 'app-listaenlazada',
  imports: [],
  templateUrl: './listaenlazada.html',
  styleUrl: './listaenlazada.css',
})



export class Listaenlazada {
  listaMusica = new LinkedList();
  cancionActual : Node | null = null;

    constructor(){
      this.listaMusica.append('Come Ov er - BTS')
      this.listaMusica.append('In your eyes - The Weeknd')
      this.listaMusica.append('REDRED - CORTIS')
      this.listaMusica.append('Telepathy - BTS')
      this.listaMusica.append('As it was - Harry Styles')
      this.listaMusica.append('Best Song Ever - One Direction')
      this.listaMusica.append('Afraid - The Neighbourhood')
      this.listaMusica.append('Let you break my Heart again - Laufey')
      this.cancionActual = this.listaMusica.head;
    }
    //Va a ser un botón para avanzar a la siguiente canción
    siguienteCancion(): void {
      if (this.cancionActual?.next){
        this.cancionActual = this.cancionActual.next;
      }
    }
    

}
