import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';

// Interfaces
import { ResponsePageable } from 'src/@core/interfaces/response-pageable.interface';

// Services
import { ColetaService } from 'src/@core/services/coleta.service';
import { Coleta } from 'src/@core/models/coleta.model';
import { ColaboradorService } from 'src/@core/services/colaborador.service';

// Components
import { Colaborador } from 'src/@core/models/colaborador.model';
import { ModalColetaDetailComponent } from 'src/@shared/modal/modal-coleta-detail/modal-coleta-detail.component';

// Thirds
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-colaboradores-detail',
  templateUrl: './colaboradores-detail.component.html',
  styleUrls: ['./colaboradores-detail.component.css']
})
export class ColaboradoresDetailComponent implements OnInit, OnDestroy {

  _colaborador: BehaviorSubject<Colaborador> = new BehaviorSubject(new Colaborador());
  colaborador$: Observable<Colaborador> = this._colaborador.asObservable();

  _coletas: BehaviorSubject<ResponsePageable<Coleta>> = new BehaviorSubject({} as ResponsePageable<Coleta>);
  coletas$: Observable<ResponsePageable<Coleta>> = this._coletas.asObservable();

  // Pagination
  page = 0;
  size = 5;

  subscription: Subscription = new Subscription();

  // Modal
  modalRef: BsModalRef;

  constructor(private colaboradorService: ColaboradorService, private coletaService: ColetaService, private activatedRoute: ActivatedRoute, private modalService: BsModalService) { }

  ngOnInit() {
    this.subscription.add(this.activatedRoute.params.subscribe((param) => this.findById(Number(param.id))));
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

  findById(id: number){
    this.subscription.add(this.colaboradorService.findById(id).subscribe({
      next: colaborador => {
        this._colaborador.next(colaborador);
        this.findAllColetas(colaborador.id)
      }
    }));
  }

  findAllColetas(colaboradorId: number){
    this.subscription.add(this.coletaService.findAll(this.page, this.size, colaboradorId).subscribe({
      next: coletas => this._coletas.next(coletas)
    }))
  }

  openModalColeta(coleta: Coleta){
    this.modalRef = this.modalService.show(ModalColetaDetailComponent, {class: 'modal-dialog-centered', initialState: {coleta: coleta}});
  }

  // Method to get current page number of pagination event
  handleCurrentPage(page: number){
    this.page = page;
    this.findAllColetas(this._colaborador.getValue().id);
  }

  // Method to get current size number of pagination event
  handleCurrentSize(size: number){
    this.size = size;
    this.findAllColetas(this._colaborador.getValue().id);
  }

}
