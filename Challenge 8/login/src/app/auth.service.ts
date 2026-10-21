import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AuthService {
  usuario = signal<string | null>(null);

  login(email: string, password: string): boolean {
    if (email === 'user@gmail.com' && password === '123') {
      this.usuario.set(email);
      return true;
    }
    return false;
  }

  logout() {
    this.usuario.set(null);
  }
}