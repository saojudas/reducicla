import { CoreModule } from './../../../@core/core.module';
import { UsuariosRoutingModule } from './usuarios-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsuariosComponent } from './usuarios.component';
import { UsuarioService } from 'src/@core/services/usuario.service';

@NgModule({
  imports: [
    UsuariosRoutingModule,
    CoreModule,
    CommonModule
  ],
  declarations: [UsuariosComponent],
  providers: [UsuarioService]
})
export class UsuariosModule { }
