import { PontoColetaService } from 'src/@core/services/ponto-coleta.service';
import { Subscription } from 'rxjs';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { UsuarioService } from 'src/@core/services/usuario.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit, OnDestroy {

  subscription: Subscription = new Subscription();

  totalUsers: number = 0;
  totalPontosColeta: number = 0;

  constructor(private usuarioService: UsuarioService, private pontoColetaService: PontoColetaService) { }

  ngOnInit() {
    this.countUsers();
    this.countPontosColeta();
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

  countUsers(){
    this.subscription.add(this.usuarioService.count().subscribe({
      next: totalUsers => this.totalUsers = totalUsers
    }))
  }

  countPontosColeta(){
    this.subscription.add(this.pontoColetaService.count().subscribe({
      next: totalPontosColeta => this.totalPontosColeta = totalPontosColeta
    }))
  }

}
