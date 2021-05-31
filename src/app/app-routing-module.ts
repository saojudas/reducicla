import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Components
import { HomeComponent } from './../@pages/home/home.component';

const routes: Routes = [

  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'login',
    loadChildren: () => import('../@pages/login/login.module').then(m => m.LoginModule)
  },
  {
    path: 'painel',
    loadChildren: () => import('../@pages/painel/painel.module').then(m => m.PainelModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
