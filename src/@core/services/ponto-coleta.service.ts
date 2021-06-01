import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

// Enviroments
import { environment } from 'src/environments/environment';

// Interfaces
import { ResponsePageable } from './../interfaces/response-pageable.interface';

// Models
import { PontoColeta } from '../models/ponto-coleta.model';

@Injectable({
  providedIn: 'root'
})
export class PontoColetaService {

  private baseURL = `${environment.baseUrlApi}/${environment.versionApi}`;

  constructor(private http: HttpClient) { }

  findById(id: number){
    return this.http.get<PontoColeta>(`${this.baseURL}/protected/ponto-coleta/${id}`);
  }

  findAll(page: number, size: number){
    return this.http.get<ResponsePageable<PontoColeta>>(`${this.baseURL}/protected/ponto-coleta?page=${page}&size=${size}`);
  }

  updateStatus(pontoColeta: PontoColeta, status: boolean){
    return this.http.put(`${this.baseURL}/admin/ponto-coleta/${pontoColeta.id}?status=${status}`, null);
  }
  delete(id: number){
    return this.http.delete(`${this.baseURL}/admin/ponto-coleta/${id}`)
  }

  count(){
    return this.http.get<number>(`${this.baseURL}/admin/ponto-coleta/count`);
  }

}
