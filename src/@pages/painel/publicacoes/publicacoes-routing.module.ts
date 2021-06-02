import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PublicacoesDetailComponent } from './publicacoes-detail/publicacoes-detail.component';

// Components
import { PublicacoesComponent } from './publicacoes.component';

const routes: Routes = [

  {
    path: '',
    component: PublicacoesComponent
  },
  {
    path: ':id',
    component: PublicacoesDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PublicacoesRoutingModule {}
