import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PontoColetaDetailComponent } from './ponto-coleta-detail/ponto-coleta-detail.component';

// Components
import { PontosColetaComponent } from './pontos-coleta.component';

const routes: Routes = [

  {
    path: '',
    component: PontosColetaComponent
  },
  {
    path: ':id',
    component: PontoColetaDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PontosColetaRoutingModule {}
