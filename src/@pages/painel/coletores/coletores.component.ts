import { ColetorService } from './../../../@core/services/coletor.service';
import { Coletor } from './../../../@core/models/coletor.model';
import { ResponsePageable } from './../../../@core/interfaces/response-pageable.interface';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-coletores',
  templateUrl: './coletores.component.html',
  styleUrls: ['./coletores.component.css']
})
export class ColetoresComponent implements OnInit {

  _coletores: BehaviorSubject<ResponsePageable<Coletor>> = new BehaviorSubject({} as ResponsePageable<Coletor>);
  coletores$: Observable<ResponsePageable<Coletor>> = this._coletores.asObservable();

  // Pagination
  page = 0;
  size = 5;

  subscription: Subscription = new Subscription();

  constructor(private coletorService: ColetorService) { }

  ngOnInit() {
    this.findAll();
  }

  findAll(){
    this.subscription.add(this.coletorService.findAll(this.page, this.size).subscribe({
      next: coletores => this._coletores.next(coletores)
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
