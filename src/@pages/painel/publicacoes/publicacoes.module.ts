import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicacoesRoutingModule } from './publicacoes-routing.module';

import { SharedModule } from 'src/@shared/shared.module';
import { CoreModule } from 'src/@core/core.module';

// Components
import { PublicacoesComponent } from './publicacoes.component';
import { PublicacoesDetailComponent } from './publicacoes-detail/publicacoes-detail.component';

// Services
import { PostService } from 'src/@core/services/post.service';

@NgModule({
  imports: [
    PublicacoesRoutingModule,
    CommonModule,
    CoreModule,
    SharedModule
  ],
  declarations: [PublicacoesComponent, PublicacoesDetailComponent],
  providers: [PostService]
})
export class PublicacoesModule { }
