import { AuthService } from './../../@core/services/auth.service';
import { CoreModule } from './../../@core/core.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


// Router
import { LoginRoutingModule } from './login-routing.module';

// Components
import { LoginComponent } from './login.component';

@NgModule({
  imports: [
    LoginRoutingModule,
    CoreModule,
    CommonModule
  ],
  declarations: [LoginComponent]
})
export class LoginModule { }
