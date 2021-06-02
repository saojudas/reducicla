import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

// Enviroments
import { environment } from 'src/environments/environment';

// Interfaces
import { ResponsePageable } from './../interfaces/response-pageable.interface';

// Models
import { Coletor } from './../models/coletor.model';

@Injectable({
  providedIn: 'root'
})
export class ColetorService {

  private baseURL = `${environment.baseUrlApi}/${environment.versionApi}`;

  constructor(private http: HttpClient) { }

  findById(id: number){
    return this.http.get<Coletor>(`${this.baseURL}/protected/coletores/${id}`);
  }

  findAll(page: number, size: number){
    return this.http.get<ResponsePageable<Coletor>>(`${this.baseURL}/protected/coletores?page=${page}&size=${size}`);
  }

  count(){
    return this.http.get<number>(`${this.baseURL}/admin/coletores/count`);
  }

}
