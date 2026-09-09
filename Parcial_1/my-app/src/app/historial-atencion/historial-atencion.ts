import { Component } from '@angular/core';

class Node {
  value: string;
  next: Node | null;
  previous: Node | null;

  constructor(value: string) {
    this.value = value;
    this.next = null;
    this.previous = null;
  }
}

class DoublyLinkedList {
  head: Node | null;
  tail: Node | null;
  length: number;

  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  
  append(value: string): void {
    const newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
    } else {
      newNode.previous = this.tail;
      this.tail!.next = newNode;
    }
    this.tail = newNode;
    this.length++;
  }

  
  remove(value: string): void {
    let current = this.head;
    while (current && current.value !== value) {
      current = current.next;
    }
    if (!current) return;

    if (current.previous) {
      current.previous.next = current.next;
    } else {
      this.head = current.next;
    }

    if (current.next) {
      current.next.previous = current.previous;
    } else {
      this.tail = current.previous;
    }

    this.length--;
  }

  
  print(): string {
    let current = this.head;
    let result = "";
    while (current) {
      result += current.value + " <-> ";
      current = current.next;
    }
    return result + "null";
  }
}

@Component({
  selector: 'app-historial-atencion',
  imports: [],
  templateUrl: './historial-atencion.html',
  styleUrl: './historial-atencion.css',
})
export class HistorialAtencion {

  historial = new DoublyLinkedList();
  atencionActual: Node | null = null;
  paciente: string = '';

  
  registrarAtencion(): void {
    if (this.paciente.trim()) {
      this.historial.append(this.paciente);
      this.atencionActual = this.historial.tail;
      this.paciente = '';
    }
  }

  
  eliminarAtencion(nombre: string): void {
    this.historial.remove(nombre);
  }

  
  atencionAnterior(): void {
    if (this.atencionActual && this.atencionActual.previous) {
      this.atencionActual = this.atencionActual.previous;
    }
  }

  
  atencionSiguiente(): void {
    if (this.atencionActual && this.atencionActual.next) {

      this.atencionActual = this.atencionActual.next;
    }
  }

  
  verAtencionActual(): string {
    return this.atencionActual ? this.atencionActual.value : 'No hay atenciones';
  }

  verHistorial(): string {

    return this.historial.print();
  }
}