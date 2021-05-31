import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Components
import { PontosColetaComponent } from './pontos-coleta.component';

const routes: Routes = [

  {
    path: '',
    component: PontosColetaComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PontosColetaRoutingModule {}
