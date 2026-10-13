import { Component } from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
interface Cliente {
  nombre: string;
  montoRetiro:number;
  fechaLlegada: Date;
}
@Component({
  selector: 'app-cola-clientes',
  imports: [],
  templateUrl: './cola-clientes.html',
  styleUrl: './cola-clientes.css',
})
export class ColaClientes {
  clientes: Cliente[] = [
    {
      nombre: "Juan Angel",
      montoRetiro: 120000,
      fechaLlegada: new Date(2026, 10, 3)
    },
    {
      nombre: "Nora Ayde",
      montoRetiro: 300000,
      fechaLlegada: new Date(2026, 10, 4)
    },
    {
      nombre: "Omar Andres",
      montoRetiro: 800000,
      fechaLlegada: new Date(2026, 10, 5)
    }
  ]
  formulario = new FormGroup({
    nombre: new FormControl('', Validators.required),
    montoRetiro: new FormControl('', Validators.required),
    fechaLlegada: new FormControl('', Validators.required),
  });
  agregarCliente() {
    this.clientes.push(this.formulario.value as unknown as Cliente);
  }
  
}
