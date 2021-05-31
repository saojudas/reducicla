import { CoreModule } from './../../../@core/core.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PontosColetaComponent } from './pontos-coleta.component';
import { PontoColetaService } from 'src/@core/services/ponto-coleta.service';
import { PontosColetaRoutingModule } from './pontos-coleta-routing.module';

@NgModule({
  imports: [
    PontosColetaRoutingModule,
    CoreModule,
    CommonModule
  ],
  declarations: [PontosColetaComponent],
  providers: [PontoColetaService]
})
export class PontosColetaModule { }
