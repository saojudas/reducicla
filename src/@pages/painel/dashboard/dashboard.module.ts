import { PontoColetaService } from 'src/@core/services/ponto-coleta.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreModule } from './../../../@core/core.module';

import { DashboardRoutingModule } from './dashboard-routing.module';

import { DashboardComponent } from './dashboard.component';
import { UsuarioService } from 'src/@core/services/usuario.service';

@NgModule({
  imports: [
    DashboardRoutingModule,
    CoreModule,
    CommonModule
  ],
  declarations: [DashboardComponent],
  providers: [UsuarioService, PontoColetaService]
})
export class DashboardModule { }
