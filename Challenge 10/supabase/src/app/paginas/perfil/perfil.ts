import { Component, inject, signal } from '@angular/core';
import { SupabaseService } from '../../services/supabase.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.html'
})
export class PerfilComponent {
  private sb = inject(SupabaseService).client;
  url = signal('');

  async subir(e: Event) {
    const file = (e.target as HTMLInputElement).files?.[0];
    if (!file) return;

    const { data: { user } } = await this.sb.auth.getUser();
    const ruta = `${user!.id}/${Date.now()}-${file.name}`;

    const { error } = await this.sb.storage.from('avatars')
      .upload(ruta, file, { upsert: true });
    if (error) return alert(error.message);

    this.url.set(this.sb.storage.from('avatars').getPublicUrl(ruta).data.publicUrl);
  }
}