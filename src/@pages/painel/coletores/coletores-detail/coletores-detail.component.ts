import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';

// Interfaces
import { ResponsePageable } from 'src/@core/interfaces/response-pageable.interface';

// Services
import { ColetorService } from 'src/@core/services/coletor.service';
import { ColetaService } from 'src/@core/services/coleta.service';

// Components
import { Coletor } from 'src/@core/models/coletor.model';
import { Coleta } from 'src/@core/models/coleta.model';
import { ModalColetaDetailComponent } from 'src/@shared/modal/modal-coleta-detail/modal-coleta-detail.component';

// Thirds
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-coletores-detail',
  templateUrl: './coletores-detail.component.html',
  styleUrls: ['./coletores-detail.component.css']
})
export class ColetoresDetailComponent implements OnInit {

  _coletor: BehaviorSubject<Coletor> = new BehaviorSubject(new Coletor());
  coletor$: Observable<Coletor> = this._coletor.asObservable();

  _coletas: BehaviorSubject<ResponsePageable<Coleta>> = new BehaviorSubject({} as ResponsePageable<Coleta>);
  coletas$: Observable<ResponsePageable<Coleta>> = this._coletas.asObservable();

  // Pagination
  page = 0;
  size = 5;

  subscription: Subscription = new Subscription();

  // Modal
  modalRef: BsModalRef;

  constructor(private coletorService: ColetorService, private coletaService: ColetaService, private activatedRoute: ActivatedRoute, private modalService: BsModalService) { }

  ngOnInit() {
    this.subscription.add(this.activatedRoute.params.subscribe((param) => this.findById(Number(param.id))));
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

  findById(id: number){
    this.subscription.add(this.coletorService.findById(id).subscribe({
      next: coletor => {
        this._coletor.next(coletor);
        this.findAllColetas(coletor.id)
      }
    }));
  }

  findAllColetas(coletorId: number){
    this.subscription.add(this.coletaService.findAll(this.page, this.size, undefined, coletorId).subscribe({
      next: coletas => this._coletas.next(coletas)
    }))
  }

  openModalColeta(coleta: Coleta){
    this.modalRef = this.modalService.show(ModalColetaDetailComponent, {class: 'modal-dialog-centered', initialState: {coleta: coleta}});
  }

  // Method to get current page number of pagination event
  handleCurrentPage(page: number){
    this.page = page;
    this.findAllColetas(this._coletor.getValue().id);
  }

  // Method to get current size number of pagination event
  handleCurrentSize(size: number){
    this.size = size;
    this.findAllColetas(this._coletor.getValue().id);
  }

}
