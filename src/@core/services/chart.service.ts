import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

// Enviroments
import { environment } from 'src/environments/environment';

// Interfaces
import { ChartResponseDTO } from '../interfaces/chart-response-dto.interface';

@Injectable({
  providedIn: 'root'
})
export class ChartService {

  private baseURL = `${environment.baseUrlApi}/${environment.versionApi}`;

  constructor(private http: HttpClient) { }

  buildTimeLineChart(ano: number){
    return this.http.get<Array<ChartResponseDTO>>(`${this.baseURL}/admin/charts/time-line?ano=${ano}`);
  }

  buildColumnChart(inicio: Date, fim: Date){
    return this.http.get<Array<ChartResponseDTO>>(`${this.baseURL}/admin/charts/column?inicio=${inicio}&fim=${fim}`);
  }

}
