import { ResponsePageable } from './../interfaces/response-pageable.interface';
import { Colaborador } from './../models/colaborador.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ColaboradorService {

  private baseURL = `${environment.baseUrlApi}/${environment.versionApi}`;

  constructor(private http: HttpClient) { }

  findById(id: number){
    return this.http.get<Colaborador>(`${this.baseURL}/protected/colaboradores/${id}`);
  }

  findAll(page: number, size: number){
    return this.http.get<ResponsePageable<Colaborador>>(`${this.baseURL}/protected/colaboradores?page=${page}&size=${size}`);
  }

  count(){
    return this.http.get<number>(`${this.baseURL}/admin/colaboradores/count`);
  }

}
