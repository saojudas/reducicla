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

  findAll(){
    return this.http.get<ResponsePageable<PontoColeta>>(`${this.baseURL}/protected/ponto-coleta`);
  }

  count(){
    return this.http.get<number>(`${this.baseURL}/admin/ponto-coleta/count`);
  }

}
