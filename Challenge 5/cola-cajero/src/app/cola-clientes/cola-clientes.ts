import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CurrencyPipe, DatePipe } from '@angular/common';
import { Queue } from '../queue/queue';

interface Cliente {
  nombre: string;
  montoRetiro: number;
  fechaLlegada: Date;
}

@Component({
  selector: 'app-cola-clientes',
  imports: [ReactiveFormsModule, CurrencyPipe, DatePipe],
  templateUrl: './cola-clientes.html',
  styleUrl: './cola-clientes.css',
})
export class ColaClientes {
  cola = new Queue<Cliente>();
  ultimoAtendido: Cliente | null = null;

  formulario = new FormGroup({
    nombre: new FormControl('', Validators.required),
    montoRetiro: new FormControl<number | null>(null, [Validators.required, Validators.min(1)]),
  });

  constructor() {
    this.cola.enqueue({ nombre: 'Juan Angel', montoRetiro: 120000, fechaLlegada: new Date() });
    this.cola.enqueue({ nombre: 'Nora Ayde', montoRetiro: 300000, fechaLlegada: new Date() });
    this.cola.enqueue({ nombre: 'Omar Andres', montoRetiro: 800000, fechaLlegada: new Date() });
  }

  agregarCliente() {
    if (this.formulario.invalid) return;

    const { nombre, montoRetiro } = this.formulario.value;

    this.cola.enqueue({
      nombre: nombre!,
      montoRetiro: montoRetiro!,
      fechaLlegada: new Date(), // fecha automática
    });

    this.formulario.reset();
  }

}