import { PostService } from './../../../@core/services/post.service';
import { SharedModule } from './../../../@shared/shared.module';
import { CoreModule } from './../../../@core/core.module';
import { PublicacoesRoutingModule } from './publicacoes-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PublicacoesComponent } from './publicacoes.component';
import { PublicacoesDetailComponent } from './publicacoes-detail/publicacoes-detail.component';

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
