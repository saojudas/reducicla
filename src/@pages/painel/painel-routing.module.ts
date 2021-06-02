import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Components
import { PainelComponent } from './painel.component';

const routes: Routes = [

  {
    path: '',
    component: PainelComponent,
    redirectTo: 'dashboard'
  },
  {
    path: 'dashboard',
    component: PainelComponent,
    loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)
  },
  {
    path: 'colaboradores',
    component: PainelComponent,
    loadChildren: () => import('./colaboradores/colaboradores.module').then(m => m.ColaboradoresModule)
  },
  {
    path: 'coletores',
    component: PainelComponent,
    loadChildren: () => import('./coletores/coletores.module').then(m => m.ColetoresModule)
  },
  {
    path: 'publicacoes',
    component: PainelComponent,
    loadChildren: () => import('./publicacoes/publicacoes.module').then(m => m.PublicacoesModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PainelRoutingModule {}
