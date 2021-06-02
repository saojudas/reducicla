import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Guards
import { AuthGuard } from 'src/@core/guards/auth.guard';

// Components
import { PublicacoesComponent } from './publicacoes.component';
import { PublicacoesDetailComponent } from './publicacoes-detail/publicacoes-detail.component';

const routes: Routes = [

  {
    path: '',
    component: PublicacoesComponent,
    canActivate: [AuthGuard]
  },
  {
    path: ':id',
    component: PublicacoesDetailComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PublicacoesRoutingModule {}
