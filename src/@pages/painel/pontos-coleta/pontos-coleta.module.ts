import { BsModalService } from 'ngx-bootstrap/modal';
import { ColetaService } from './../../../@core/services/coleta.service';
import { SharedModule } from './../../../@shared/shared.module';
import { CoreModule } from './../../../@core/core.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PontosColetaComponent } from './pontos-coleta.component';
import { PontoColetaService } from 'src/@core/services/ponto-coleta.service';
import { PontosColetaRoutingModule } from './pontos-coleta-routing.module';
import { PontoColetaDetailComponent } from './ponto-coleta-detail/ponto-coleta-detail.component';

@NgModule({
  imports: [
    PontosColetaRoutingModule,
    CoreModule,
    SharedModule,
    CommonModule
  ],
  declarations: [PontosColetaComponent, PontoColetaDetailComponent],
  providers: [PontoColetaService, ColetaService, BsModalService]
})
export class PontosColetaModule { }
