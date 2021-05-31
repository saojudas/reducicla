import { Credencial } from './../../@core/interfaces/credencial.interface';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

import Swal from 'sweetalert2'

// Services
import { AuthService } from './../../@core/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {

  credencial: Credencial = {} as Credencial;

  // Form
  form: FormGroup;
  loading = false;
  submitted = false;

  subscription: Subscription = new Subscription();

  constructor(private authService: AuthService, private formBuilder: FormBuilder, private router: Router) { }

  get f() { return this.form.controls; }

  ngOnInit() {
    this.initForm();
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

  login(){
    this.subscription.add(this.authService.login(this.credencial.email.trim().toLowerCase(), this.credencial.senha).subscribe({
      next: credencial => {
        localStorage.setItem('credencial', JSON.stringify(credencial));
        this.router.navigate(['./painel']);
      },
      error: error => {
        Swal.fire({
          title: 'Ooops',
          text: `${error.error.message}.`,
          icon: 'error',
          heightAuto: false
        })
      }
    }))
  }

  initForm(){
    this.form = this.formBuilder.group({
      email: new FormControl(null, Validators.required),
      senha: new FormControl(null, Validators.required)
    });
  }

  onSubmit(){
    this.submitted = true;
    this.loading = true;
    if (this.form.invalid) { this.loading = false; return; }
    this.login();
    this.loading = false;
  }

}
