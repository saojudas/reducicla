import { HeaderInterceptor } from './interceptor/header-interceptor';
import { AuthService } from './services/auth.service';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  imports: [
    HttpClientModule,
    FormsModule, ReactiveFormsModule
  ],
  exports: [
    HttpClientModule,
    FormsModule, ReactiveFormsModule
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
