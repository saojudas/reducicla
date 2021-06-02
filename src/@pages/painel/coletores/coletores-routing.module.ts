import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Guards
import { AuthGuard } from 'src/@core/guards/auth.guard';

// Components
import { ColetoresComponent } from './coletores.component';
import { ColetoresDetailComponent } from './coletores-detail/coletores-detail.component';

const routes: Routes = [

  {
    path: '',
    component: ColetoresComponent,
    canActivate: [AuthGuard]
  },
  {
    path: ':id',
    component: ColetoresDetailComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ColetoresRoutingModule {}
