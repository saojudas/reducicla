import { ColetaService } from './../../../@core/services/coleta.service';
import { ColaboradoresDetailComponent } from './colaboradores-detail/colaboradores-detail.component';
import { SharedModule } from './../../../@shared/shared.module';
import { CoreModule } from './../../../@core/core.module';
import { ColaboradoresRoutingModule } from './colaboradores-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ColaboradoresComponent } from './colaboradores.component';
import { ColaboradorService } from 'src/@core/services/colaborador.service';

@NgModule({
  imports: [
    ColaboradoresRoutingModule,
    CommonModule,
    CoreModule,
    SharedModule
  ],
  declarations: [ColaboradoresComponent, ColaboradoresDetailComponent],
  providers: [ColaboradorService, ColetaService]
})
export class ColaboradoresModule { }
