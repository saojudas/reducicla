import { ModalColetaDetailComponent } from './../../../../@shared/modal/modal-coleta-detail/modal-coleta-detail.component';
import { ResponsePageable } from './../../../../@core/interfaces/response-pageable.interface';
import { Coleta } from './../../../../@core/models/coleta.model';
import { ColetaService } from './../../../../@core/services/coleta.service';
import { PontoColetaService } from 'src/@core/services/ponto-coleta.service';
import { PontoColeta } from './../../../../@core/models/ponto-coleta.model';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-ponto-coleta-detail',
  templateUrl: './ponto-coleta-detail.component.html',
  styleUrls: ['./ponto-coleta-detail.component.css']
})
export class PontoColetaDetailComponent implements OnInit, OnDestroy {

  _pontoColeta: BehaviorSubject<PontoColeta> = new BehaviorSubject(new PontoColeta());
  pontoColeta$: Observable<PontoColeta> = this._pontoColeta.asObservable();

  _coletas: BehaviorSubject<ResponsePageable<Coleta>> = new BehaviorSubject({} as ResponsePageable<Coleta>);
  coletas$: Observable<ResponsePageable<Coleta>> = this._coletas.asObservable();

  // Pagination
  page = 0;
  size = 5;

  subscription: Subscription = new Subscription();

  // Modal
  modalRef: BsModalRef;

  constructor(private pontoColetaService: PontoColetaService, private coletaService: ColetaService, private activatedRoute: ActivatedRoute, private modalService: BsModalService) { }

  ngOnInit() {
    this.subscription.add(this.activatedRoute.params.subscribe((param) => this.findById(Number(param.id))));
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

  findById(id: number){
    this.subscription.add(this.pontoColetaService.findById(id).subscribe({
      next: pontoColeta => {
        this._pontoColeta.next(pontoColeta);
        this.findAllColetas();
      }
    }));
  }

  findAllColetas(){
    this.subscription.add(this.coletaService.findAll(this.page, this.size, this._pontoColeta.getValue().id).subscribe({
      next: coletas => {
        this._coletas.next(coletas);
      }
    }))
  }

  openModalColeta(coleta: Coleta){
    this.modalRef = this.modalService.show(ModalColetaDetailComponent, {class: 'modal-dialog-centered', initialState: {coleta: coleta}});
  }

  // Method to get current page number of pagination event
  handleCurrentPage(page: number){
    this.page = page;
    this.findAllColetas();
  }

  // Method to get current size number of pagination event
  handleCurrentSize(size: number){
    this.size = size;
    this.findAllColetas();
  }

}
