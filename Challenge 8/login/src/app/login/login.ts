import { Component, inject, signal } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-login',
template: `
  <div class="login">
    <h2>Iniciar sesión</h2>
    <input #email type="email" placeholder="Correo">
    <input #pass type="password" placeholder="Contraseña">
    <button (click)="entrar(email.value, pass.value)">Iniciar sesión</button>
    <li>Gmail prueba:user@gmail.com</li> 
    <li>Contraseña prueba:123</li>
    @if (error()) {
      <p style="color:red">Correo o contraseña incorrectos</p>
    }
  </div>
`,
})
export class Login {
  auth = inject(AuthService);
  router = inject(Router);
  error = signal(false);

  entrar(email: string, pass: string) {
    if (this.auth.login(email, pass)) this.router.navigate(['/artistas']);
    else this.error.set(true);
  }
}