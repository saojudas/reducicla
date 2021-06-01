import { Coleta } from './../../../@core/models/coleta.model';
import { Component, Input, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-modal-coleta-detail',
  templateUrl: './modal-coleta-detail.component.html',
  styleUrls: ['./modal-coleta-detail.component.css']
})
export class ModalColetaDetailComponent implements OnInit {

  @Input() coleta: Coleta = new Coleta();

  constructor(private modalRef: BsModalRef) { }

  ngOnInit() {
    console.log(this.coleta);
  }

  onClose(){
    this.modalRef.hide();
  }


}
