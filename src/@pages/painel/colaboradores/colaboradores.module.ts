import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ColaboradoresRoutingModule } from './colaboradores-routing.module';

import { SharedModule } from 'src/@shared/shared.module';
import { CoreModule } from 'src/@core/core.module';

// Services
import { ColetaService } from 'src/@core/services/coleta.service';
import { ColaboradorService } from 'src/@core/services/colaborador.service';

// Components
import { ColaboradoresComponent } from './colaboradores.component';
import { ColaboradoresDetailComponent } from './colaboradores-detail/colaboradores-detail.component';

@NgModule({
  imports: [
    CommonModule,
    ColaboradoresRoutingModule,
    CoreModule,
    SharedModule
  ],
  declarations: [ColaboradoresComponent, ColaboradoresDetailComponent],
  providers: [ColaboradorService, ColetaService]
})
export class ColaboradoresModule { }
