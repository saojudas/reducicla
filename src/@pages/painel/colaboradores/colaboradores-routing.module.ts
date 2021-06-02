import { ColaboradoresDetailComponent } from './colaboradores-detail/colaboradores-detail.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Components
import { ColaboradoresComponent } from './colaboradores.component';

const routes: Routes = [

  {
    path: '',
    component: ColaboradoresComponent
  },
  {
    path: ':id',
    component: ColaboradoresDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ColaboradoresRoutingModule {}
