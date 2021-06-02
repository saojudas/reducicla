import { SharedModule } from './../../../@shared/shared.module';
import { CoreModule } from './../../../@core/core.module';
import { ColetoresRoutingModule } from './coletores-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ColetoresComponent } from './coletores.component';
import { ColetorService } from 'src/@core/services/coletor.service';
import { ColetoresDetailComponent } from './coletores-detail/coletores-detail.component';

@NgModule({
  imports: [
    ColetoresRoutingModule,
    CommonModule,
    CoreModule,
    SharedModule,
  ],
  declarations: [ColetoresComponent, ColetoresDetailComponent],
  providers: [ColetorService]
})
export class ColetoresModule { }
