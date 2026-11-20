import { Component, inject } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  auth = inject(AuthService);
  private router = inject(Router);

  async salir() {
    await this.auth.salir();
    this.router.navigate(['/login']);
  }
}