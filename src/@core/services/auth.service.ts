import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// Enviroments
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private loginURL = `${environment.baseUrlApi}/login`;
  private baseURL = `${environment.baseUrlApi}/${environment.versionApi}`;

  constructor(private http: HttpClient) { }

  login(email: string, senha: string){
    return this.http.post<any>(this.loginURL, { email, senha }, {headers: { skip: 'true' }});
  }

  logout(): void {
    localStorage.removeItem('credencial');
  }

  getToken(): string {
    return JSON.parse(localStorage.getItem('credencial'))['token'];
  }

  isLogged() {
    return !!localStorage.getItem('credencial');
  }

}
