import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Components
import { UsuariosComponent } from './usuarios.component';

const routes: Routes = [

  {
    path: '',
    component: UsuariosComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsuariosRoutingModule {}
