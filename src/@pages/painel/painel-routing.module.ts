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
    path: 'usuarios',
    component: PainelComponent,
    loadChildren: () => import('./usuarios/usuarios.module').then(m => m.UsuariosModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PainelRoutingModule {}
