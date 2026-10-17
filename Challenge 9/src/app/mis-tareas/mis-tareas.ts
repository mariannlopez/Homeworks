import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

export interface Tarea {
  id: number;
  titulo: string;
  descripcion: string;
  completada: boolean;
}

@Component({
  selector: 'app-mis-tareas',
  imports: [FormsModule, CommonModule],
  templateUrl: './mis-tareas.html',
  styleUrl: './mis-tareas.css',
})
export class MisTareas {
  tareas: Tarea[] = [];
 
  // Modelo del formulario (sirve para crear y para editar)
  titulo = '';
  descripcion = '';
 
  // Si es distinto de null, el formulario está en modo edición
  idEnEdicion: number | null = null;
 
  private siguienteId = 1;
 
  get editando(): boolean {
    return this.idEnEdicion !== null;
  }
 
  get formularioValido(): boolean {
    return this.titulo.trim().length > 0;
  }
 
  guardar(): void {
    if (!this.formularioValido) return;
 
    if (this.editando) {
      this.tareas = this.tareas.map((t) =>
        t.id === this.idEnEdicion
          ? { ...t, titulo: this.titulo.trim(), descripcion: this.descripcion.trim() }
          : t
      );
    } else {
      this.tareas = [
        ...this.tareas,
        {
          id: this.siguienteId++,
          titulo: this.titulo.trim(),
          descripcion: this.descripcion.trim(),
          completada: false,
        },
      ];
    }
    this.limpiarFormulario();
  }
 
  editar(tarea: Tarea): void {
    this.idEnEdicion = tarea.id;
    this.titulo = tarea.titulo;
    this.descripcion = tarea.descripcion;
  }
 
  eliminar(id: number): void {
    if (!confirm('¿Eliminar esta tarea?')) return;
    this.tareas = this.tareas.filter((t) => t.id !== id);
    // Si se eliminó la tarea que se estaba editando, se reinicia el formulario
    if (this.idEnEdicion === id) this.limpiarFormulario();
  }
 
  alternarCompletada(tarea: Tarea): void {
    this.tareas = this.tareas.map((t) =>
      t.id === tarea.id ? { ...t, completada: !t.completada } : t
    );
  }
 
  cancelarEdicion(): void {
    this.limpiarFormulario();
  }
 
  trackPorId(_: number, tarea: Tarea): number {
    return tarea.id;
  }
 
  private limpiarFormulario(): void {
    this.titulo = '';
    this.descripcion = '';
    this.idEnEdicion = null;
  }
}
