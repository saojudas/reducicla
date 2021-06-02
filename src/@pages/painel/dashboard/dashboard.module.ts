import { PostService } from './../../../@core/services/post.service';
import { ColetorService } from './../../../@core/services/coletor.service';
import { ColaboradorService } from './../../../@core/services/colaborador.service';
import { ColetaService } from './../../../@core/services/coleta.service';
import { SharedModule } from './../../../@shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreModule } from './../../../@core/core.module';

import { DashboardRoutingModule } from './dashboard-routing.module';

import { DashboardComponent } from './dashboard.component';
import { ChartService } from 'src/@core/services/chart.service';

@NgModule({
  imports: [
    DashboardRoutingModule,
    CoreModule,
    SharedModule,
    CommonModule
  ],
  declarations: [DashboardComponent],
  providers: [ColetaService, ColaboradorService, ColetorService, PostService, ChartService]
})
export class DashboardModule { }
