import { SharedModule } from './../../../@shared/shared.module';
import { PontoColetaService } from 'src/@core/services/ponto-coleta.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreModule } from './../../../@core/core.module';

import { DashboardRoutingModule } from './dashboard-routing.module';

import { DashboardComponent } from './dashboard.component';
import { UsuarioService } from 'src/@core/services/usuario.service';
import { ChartService } from 'src/@core/services/chart.service';

@NgModule({
  imports: [
    DashboardRoutingModule,
    CoreModule,
    SharedModule,
    CommonModule
  ],
  declarations: [DashboardComponent],
  providers: [UsuarioService, PontoColetaService, ChartService]
})
export class DashboardModule { }
