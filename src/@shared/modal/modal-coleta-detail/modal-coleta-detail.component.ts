import { Component, Input, OnInit } from '@angular/core';

// Components
import { Coleta } from 'src/@core/models/coleta.model';

// Thirds
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
  }

  onClose(){
    this.modalRef.hide();
  }


}
