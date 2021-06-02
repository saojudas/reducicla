import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

// Interceptors
import { HeaderInterceptor } from './interceptor/header-interceptor';

// Services
import { AuthService } from './services/auth.service';


@NgModule({
  imports: [
    HttpClientModule

  ],
  exports: [
    HttpClientModule

  ],
  declarations: [],
  providers: [
    AuthService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HeaderInterceptor,
      multi: true,
    }
  ]
})
export class CoreModule { }
