import { Injectable } from '@angular/core';
import { HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';

// Services
import { AuthService } from './../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class HeaderInterceptor implements HttpInterceptor{

  constructor(private authService: AuthService) { }

  intercept(request: HttpRequest<any>, next: HttpHandler){
    if (request.headers.get('skip')){
      request = request.clone({ headers: request.headers.delete('skip') });
      return next.handle(request);
    }
    request = request.clone({
      setHeaders: {
        Authorization: `${this.authService.getToken()}`
      }
    });
    return next.handle(request);
  }
}
