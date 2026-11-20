import { Component, OnDestroy, OnInit, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RealtimeChannel } from '@supabase/supabase-js';
import { TareasService } from '../../services/tareas.service';
import { SupabaseService } from '../../services/supabase.service';

@Component({
  selector: 'app-tareas',
  imports: [FormsModule],
  templateUrl: './tareas.html'
})
export class TareasComponent implements OnInit, OnDestroy {
  protected srv = inject(TareasService);
  private sb = inject(SupabaseService).client;
  private canal?: RealtimeChannel;

  tareas = signal<any[]>([]);
  nueva = '';

  async ngOnInit() {
    await this.cargar();
    this.canal = this.srv.escuchar(() => this.cargar());
  }

  async cargar() {
    const { data } = await this.srv.listar();
    this.tareas.set(data ?? []);
  }

  async agregar() {
    await this.srv.crear(this.nueva);
    this.nueva = '';
  }

  ngOnDestroy() {
    if (this.canal) this.sb.removeChannel(this.canal);
  }
}