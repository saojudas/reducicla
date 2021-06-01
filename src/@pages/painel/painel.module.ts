import { SharedModule } from './../../@shared/shared.module';
import { CoreModule } from './../../@core/core.module';
import { MainComponent } from './main/main.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { PainelRoutingModule } from './painel-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PainelComponent } from './painel.component';

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
