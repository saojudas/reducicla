import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PainelRoutingModule } from './painel-routing.module';

import { SharedModule } from './../../@shared/shared.module';
import { CoreModule } from './../../@core/core.module';

// Components
import { MainComponent } from './main/main.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { PainelComponent } from './painel.component';

// Components


@NgModule({
  imports: [
    PainelRoutingModule,
    CoreModule,
    SharedModule,
    CommonModule
  ],
  declarations: [PainelComponent, SidebarComponent, MainComponent]
})
export class PainelModule { }
