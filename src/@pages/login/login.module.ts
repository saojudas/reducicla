import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from './../../@shared/shared.module';
import { CoreModule } from './../../@core/core.module';

// Services
import { AuthService } from './../../@core/services/auth.service';


// Router
import { LoginRoutingModule } from './login-routing.module';

// Components
import { LoginComponent } from './login.component';

@NgModule({
  imports: [
    LoginRoutingModule,
    CoreModule,
    SharedModule,
    CommonModule
  ],
  declarations: [LoginComponent],
  providers: [AuthService]
})
export class LoginModule { }
