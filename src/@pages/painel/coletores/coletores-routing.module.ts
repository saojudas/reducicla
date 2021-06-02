import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ColetoresDetailComponent } from './coletores-detail/coletores-detail.component';

// Components
import { ColetoresComponent } from './coletores.component';

const routes: Routes = [

  {
    path: '',
    component: ColetoresComponent
  },
  {
    path: ':id',
    component: ColetoresDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ColetoresRoutingModule {}
