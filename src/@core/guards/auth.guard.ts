import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

// Services
import { AuthService } from './../services/auth.service';

// Third
import Swal from 'sweetalert2';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanActivateChild {

  constructor(private authService: AuthService, private router: Router){ }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this.authService.isLogged()){ return true; }
    this.router.navigate(['/login']);
    Swal.fire({
      title: 'Acesso Inválido',
      text: `Por favor, realize o login para válidar seu acesso`,
      icon: 'warning',
      heightAuto: false
    });
    return false;
  }

  canActivateChild(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this.authService.isLogged()){ return true; }
    this.router.navigate(['/login']);
    Swal.fire({
      title: 'Acesso Inválido',
      text: `Por favor, realize o login para válidar seu acesso`,
      icon: 'warning',
      heightAuto: false
    });
    return false;
  }

}
