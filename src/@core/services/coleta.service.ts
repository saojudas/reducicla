import { ResponsePageable } from './../interfaces/response-pageable.interface';
import { Coleta } from './../models/coleta.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ColetaService {

  private baseURL = `${environment.baseUrlApi}/${environment.versionApi}`;

  constructor(private http: HttpClient) { }

  findById(id: number){
    return this.http.get<Coleta>(`${this.baseURL}/protected/coletas/${id}`);
  }

  findAll(page: number, size: number, colaboradorId?: number, coletorId?: number){
    if(colaboradorId != undefined) return this.http.get<ResponsePageable<Coleta>>(`${this.baseURL}/protected/coletas?page=${page}&size=${size}&colaboradorId=${colaboradorId}`);
    else if (coletorId != undefined) return this.http.get<ResponsePageable<Coleta>>(`${this.baseURL}/protected/coletas?page=${page}&size=${size}&coletorId=${coletorId}`);
    else return this.http.get<ResponsePageable<Coleta>>(`${this.baseURL}/protected/coletas?page=${page}&size=${size}&colaboradorId=${colaboradorId}&coletorId=${coletorId}`);
  }

  count(){
    return this.http.get<number>(`${this.baseURL}/admin/coletas/count`);
  }

}
