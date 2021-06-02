import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ColetoresRoutingModule } from './coletores-routing.module';

import { SharedModule } from 'src/@shared/shared.module';
import { CoreModule } from 'src/@core/core.module';

// Services
import { ColetorService } from 'src/@core/services/coletor.service';

// Components
import { ColetoresComponent } from './coletores.component';
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
