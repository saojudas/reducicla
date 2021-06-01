import { ModalModule } from 'ngx-bootstrap/modal';
import { ModalColetaDetailComponent } from './modal/modal-coleta-detail/modal-coleta-detail.component';
import { PaginationComponent } from './pagination/pagination.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgApexchartsModule } from 'ng-apexcharts';

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
    PaginationComponent, ModalColetaDetailComponent
  ],
  providers: []
})
export class SharedModule { }
