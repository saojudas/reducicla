import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Third Modules
import { NgApexchartsModule } from 'ng-apexcharts';
import { ModalModule } from 'ngx-bootstrap/modal';

// Components
import { ModalPublicacaoAddComponent } from './modal/modal-publicacao-add/modal-publicacao-add.component';
import { ModalColetaDetailComponent } from './modal/modal-coleta-detail/modal-coleta-detail.component';
import { PaginationComponent } from './pagination/pagination.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule, ReactiveFormsModule,
    NgApexchartsModule,
    ModalModule.forRoot()
  ],
  exports: [
    PaginationComponent, ModalColetaDetailComponent,
    FormsModule, ReactiveFormsModule,
    NgApexchartsModule
  ],
  declarations: [
    PaginationComponent, ModalColetaDetailComponent, ModalPublicacaoAddComponent
  ],
  providers: []
})
export class SharedModule { }
