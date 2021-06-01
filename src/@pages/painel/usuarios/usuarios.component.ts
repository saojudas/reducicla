import { rolesLabel } from './../../../@core/enumerateds/role.enum';
import { ResponsePageable } from './../../../@core/interfaces/response-pageable.interface';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';
import { UsuarioService } from 'src/@core/services/usuario.service';
import { Usuario } from 'src/@core/models/usuario.model';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit, OnDestroy {

  _usuarios: BehaviorSubject<ResponsePageable<Usuario>> = new BehaviorSubject({} as ResponsePageable<Usuario>);
  usuarios$: Observable<ResponsePageable<Usuario>> = this._usuarios.asObservable();

  subscription: Subscription = new Subscription();

  // Pagination
  page = 0;
  size = 5;

  // Utils
  rolesLabel = rolesLabel;

  constructor(private usuarioService: UsuarioService) { }

  ngOnInit() {
    this.findAll();
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

  findAll(){
    this.subscription.add(this.usuarioService.findAll(this.page, this.size).subscribe({
      next: usuarios => {
        this._usuarios.next(usuarios);
      }
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
