import { PontoColetaService } from './../../../@core/services/ponto-coleta.service';
import { ResponsePageable } from './../../../@core/interfaces/response-pageable.interface';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { PontoColeta } from 'src/@core/models/ponto-coleta.model';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-pontos-coleta',
  templateUrl: './pontos-coleta.component.html',
  styleUrls: ['./pontos-coleta.component.css']
})
export class PontosColetaComponent implements OnInit {

  _pontosColeta: BehaviorSubject<ResponsePageable<PontoColeta>> = new BehaviorSubject({} as ResponsePageable<PontoColeta>);
  pontosColeta$: Observable<ResponsePageable<PontoColeta>> = this._pontosColeta.asObservable();

  subscription: Subscription = new Subscription();

  // Pagination
  page = 0;
  size = 5;

  constructor(private pontoColetaService: PontoColetaService) { }

  ngOnInit() {
    this.findAll();
  }

  findAll(){
    this.subscription.add(this.pontoColetaService.findAll(this.page, this.size).subscribe({
      next: pontosColeta => {
        this._pontosColeta.next(pontosColeta)
      }
    }))
  }

  updateStatus(pontoColeta: PontoColeta, status: boolean){
    this.subscription.add(this.pontoColetaService.updateStatus(pontoColeta, status).subscribe({
      next: () => {
        if(status) Swal.fire('Ponto de Coleta Atualizado!', `O Ponto de coleta #${pontoColeta.id} foi ativado(a) com sucesso!`, 'success');
        else Swal.fire('Ponto de Coleta Atualizado!', `O Ponto de coleta #${pontoColeta.id} foi inativado(a) com sucesso!`, 'success');
      },
      error: error => Swal.fire('Falha!', `${error.error.mensagem}`, 'error')
    }))
  }

  delete(pontoColeta: PontoColeta){
    Swal.fire({
      title: 'Excluir Ponto de Coleta',
      text: `Você deseja realmente excluir o Ponto de Coleta #${pontoColeta.id}?`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sim',
      cancelButtonText: 'Não'
    }).then(result => {
      if(result.value){
        this.subscription.add(this.pontoColetaService.delete(pontoColeta.id).subscribe({
          next: () => {
            this.findAll();
            Swal.fire('Ponto de Coleta Removido!', `Ponto de Coleta removida com sucesso!`, 'success');
          },
          error: error => Swal.fire('Ooops!', `${error.error.mensagem}`, 'error')
        }))
      }
    })
  }

  // Method to get current page number of pagination event
  handleCurrentPage(page: number){
    this.page = page;
    this.findAll();
  }

  // Method to get current size number of pagination event
  handleCurrentSize(size: number){
    this.size = size;
    this.findAll();
  }

}
