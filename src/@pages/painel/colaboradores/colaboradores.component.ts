import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';

// Interfaces
import { ResponsePageable } from 'src/@core/interfaces/response-pageable.interface';

// Services
import { ColaboradorService } from 'src/@core/services/colaborador.service';

// Models
import { Colaborador } from 'src/@core/models/colaborador.model';

@Component({
  selector: 'app-colaboradores',
  templateUrl: './colaboradores.component.html',
  styleUrls: ['./colaboradores.component.css']
})
export class ColaboradoresComponent implements OnInit {

  _colaboradores: BehaviorSubject<ResponsePageable<Colaborador>> = new BehaviorSubject({} as ResponsePageable<Colaborador>);
  colaboradores$: Observable<ResponsePageable<Colaborador>> = this._colaboradores.asObservable();

  // Pagination
  page = 0;
  size = 5;

  subscription: Subscription = new Subscription();

  constructor(private colaboradorService: ColaboradorService) { }

  ngOnInit() {
    this.findAll();
  }

  findAll(){
    this.subscription.add(this.colaboradorService.findAll(this.page, this.size).subscribe({
      next: colaboradores => this._colaboradores.next(colaboradores)
    }))
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
