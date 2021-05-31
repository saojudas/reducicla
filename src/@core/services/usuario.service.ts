import { ResponsePageable } from './../interfaces/response-pageable.interface';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

// Enviroments
import { environment } from 'src/environments/environment';

// Models
import { Usuario } from '../models/usuario.model';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private baseURL = `${environment.baseUrlApi}/${environment.versionApi}`;

  constructor(private http: HttpClient) { }

  findAll(){
    return this.http.get<ResponsePageable<Usuario>>(`${this.baseURL}/admin/usuarios`);
  }

}
