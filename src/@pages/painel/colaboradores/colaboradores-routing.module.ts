import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Guards
import { AuthGuard } from 'src/@core/guards/auth.guard';

// Components
import { ColaboradoresComponent } from './colaboradores.component';
import { ColaboradoresDetailComponent } from './colaboradores-detail/colaboradores-detail.component';


const routes: Routes = [

  {
    path: '',
    component: ColaboradoresComponent,
    canActivate: [AuthGuard]
  },
  {
    path: ':id',
    component: ColaboradoresDetailComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ColaboradoresRoutingModule {}
