import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase/config';

@Component({
  selector: 'app-crear-cuenta',
  imports: [FormsModule, RouterLink],
  templateUrl: './crear-cuenta.html',
  styleUrl: './crear-cuenta.css',
})
export class CrearCuenta {
  email = signal<string>('');
  contrasena = signal<string>('');

  private router = inject(Router);

  async handleRegister(){
    try{
      await createUserWithEmailAndPassword(auth,
        this.email(), this.contrasena()
      )

      this.router.navigate(['/tareas'])
    }catch(error: any){
      alert(error.message);
    }
  }
}
