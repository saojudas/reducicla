import { PontoColetaService } from './../../../@core/services/ponto-coleta.service';
import { ResponsePageable } from './../../../@core/interfaces/response-pageable.interface';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { PontoColeta } from 'src/@core/models/ponto-coleta.model';

@Component({
  selector: 'app-pontos-coleta',
  templateUrl: './pontos-coleta.component.html',
  styleUrls: ['./pontos-coleta.component.css']
})
export class PontosColetaComponent implements OnInit {

  _pontosColeta: BehaviorSubject<ResponsePageable<PontoColeta>> = new BehaviorSubject({} as ResponsePageable<PontoColeta>);
  pontosColeta$: Observable<ResponsePageable<PontoColeta>> = this._pontosColeta.asObservable();

  subscription: Subscription = new Subscription();

  constructor(private pontoColetaService: PontoColetaService) { }

  ngOnInit() {
    this.findAll();
  }

  findAll(){
    this.subscription.add(this.pontoColetaService.findAll().subscribe({
      next: pontosColeta => {
        console.log(pontosColeta);
        this._pontosColeta.next(pontosColeta)
      }
    }))
  }

}
