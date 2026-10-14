import { Injectable, signal } from '@angular/core';
import { signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { auth } from '../../firebase/config';
import { Nodo, TipoNodo } from '../models/nodo';


@Injectable({ providedIn: 'root' })
export class Arbol {
  usuario = signal<string | null>(null);
  raiz = signal<Nodo>(new Nodo('raiz', 'Raíz', 'carpeta', 'sistema'));

  async login(correo: string, clave: string): Promise<void> {
    const res = await signInWithEmailAndPassword(auth, correo, clave);
    this.usuario.set(res.user.email);
  }

  async logout(): Promise<void> {
    await signOut(auth);
    this.usuario.set(null);
  }

  crear(padreId: string, nombre: string, tipo: TipoNodo): void {
    const correo = this.usuario();
    if (!correo) throw new Error('Debes iniciar sesión.');

    const padre = this.raiz().buscar(padreId);
    if (!padre) throw new Error('Carpeta no encontrada.');

    padre.agregarHijo(new Nodo(crypto.randomUUID(), nombre, tipo, correo));
    this.raiz.set(this.raiz());
  }
}