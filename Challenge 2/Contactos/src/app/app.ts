import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AgregarContactos } from './agregar-contactos/agregar-contactos';
import { ListaContactos } from './lista-contactos/lista-contactos';
@Component({
  selector: 'app-root',
  imports: [AgregarContactos,ListaContactos],
  templateUrl: './app.html',
  styleUrl: './app.css'
})


export class App {
  protected readonly title = signal('Contactos');
  cargando = signal(true);
  contactos = signal<any[]>([]);

  cargarContactos = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve([
        { nombre: 'Juan Angel', telefono: '3001234567' },
        { nombre: 'Marian López', telefono: '3013557503' }
      ]);
    }, 500);
  });
}

  async iniciar() {
    try {
      const data: any = await this.cargarContactos();
      this.contactos.set(data);
      this.cargando.set(false);
    } catch (error) {
      console.error(error);
    }
  }

  agregarContacto(nuevo: any) {
    this.contactos.update(lista => [...lista, nuevo]);
  }

  eliminarContacto(nombre: string) {
    this.contactos.update(lista => lista.filter(c => c.nombre !== nombre));
  }
}
