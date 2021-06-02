import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';

import { SharedModule } from 'src/@shared/shared.module';
import { CoreModule } from 'src/@core/core.module';

// Services
import { PostService } from 'src/@core/services/post.service';
import { ColetorService } from 'src/@core/services/coletor.service';
import { ColaboradorService } from 'src/@core/services/colaborador.service';
import { ColetaService } from 'src/@core/services/coleta.service';
import { ChartService } from 'src/@core/services/chart.service';

// Components
import { DashboardComponent } from './dashboard.component';

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
