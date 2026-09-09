import { Component } from '@angular/core';

class Node {
  value: string;
  next: Node | null;

  constructor(value: string) {
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
 //Se debe usar append para agregar nuevos pacientes, remove para los que ya fueron atendidos, print para mostrar la lista de pacientes
  append(value: string): void {
    const newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
    } else {
      this.tail!.next = newNode;
    }
    this.tail = newNode;
    this.length++;
  }

  remove(value: string): void {
    if (!this.head) return;

    if (this.head.value === value) {
      this.head = this.head.next;
      if (!this.head) {
        this.tail = null;
      }
      this.length--;
      return;
    }

    let current = this.head;
    while (current.next && current.next.value !== value) {
      current = current.next;
    }
    if (current.next) {
      current.next = current.next.next;
      if (!current.next) this.tail = current;
      this.length--;
    }
  }

  print(): string {
    let current = this.head;
    let result = "";
    while (current) {
      result += current.value + " -> ";
      current = current.next;
    }
    return result + "null";
  }
}

@Component({
  selector: 'app-gestion-pacientes',
  imports: [],
  templateUrl: './gestion-pacientes.html',
  styleUrl: './gestion-pacientes.css',
})
export class GestionPacientes {
  
  listaEspera = new LinkedList();
  paciente: string = '';

  //Va a ser un boton para agregar pacientes
  agregarPaciente(): void {
    if (this.paciente.trim()) {
      this.listaEspera.append(this.paciente);
      this.paciente = '';
    }
  }
  //Se remueve el paciente atendido
  atenderPaciente(nombre: string): void {
    this.listaEspera.remove(nombre);
  }
  //Se muestra la lista
  verLista(): string {
    return this.listaEspera.print();
  }
}
