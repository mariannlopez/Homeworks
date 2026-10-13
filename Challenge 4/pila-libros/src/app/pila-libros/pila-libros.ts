import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

//Interface se usa para crear como un tipo molde de algun objeto
interface Libro {
  nombre: string;
  isbn: string;
  autor: string;
  editorial: string;
}

@Component({
  selector: 'app-pila-libros',
  imports: [ReactiveFormsModule],   //Esto activa los formularios
  templateUrl: './pila-libros.html',
  styleUrl: './pila-libros.css',
})
export class PilaLibros {
  libros: Libro[] = [
    { nombre: "Almendra", isbn: '9789583204036', autor: 'Won-Pyung Sohn', editorial: 'Editorial Océano de Colombia' },
    { nombre: 'La peste', isbn: '9788435018814', autor: 'Albert Camus', editorial: 'Edhasa' },
    { nombre: 'Actos humanos', isbn: '9788439745549', autor: 'Han Kang', editorial: 'Literatura Random House' }
  ];;

  //Se crea un formulario y un campo por cada campo a llenar
  formulario = new FormGroup({
    nombre: new FormControl('', Validators.required),
    isbn: new FormControl('', Validators.required),
    autor: new FormControl('', Validators.required),
    editorial: new FormControl('', Validators.required),
  });

  //Push: Agrega al final
  agregarLibro() {
    this.libros.push(this.formulario.value as Libro);
  }

  //Pop: Saca del final
  quitarLibro() {
    this.libros.pop();
  }
}