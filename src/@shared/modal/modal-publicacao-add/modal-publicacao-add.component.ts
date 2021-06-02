import { Subscription } from 'rxjs';
import { PostService } from './../../../@core/services/post.service';
import { Post } from './../../../@core/models/post.model';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { Component, OnDestroy, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modal-publicacao-add',
  templateUrl: './modal-publicacao-add.component.html',
  styleUrls: ['./modal-publicacao-add.component.css']
})
export class ModalPublicacaoAddComponent implements OnInit, OnDestroy {

  publicacao: Post = new Post();

  subscription: Subscription = new Subscription();

  // Form
  form: FormGroup;
  loading = false;
  submitted = false;

  constructor(private postService: PostService, private modalRef: BsModalRef, private formBuilder: FormBuilder, private router: Router) { }

  get f() { return this.form.controls; }

  ngOnInit() {
    this.initForm();
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

  initForm(){
    this.form = this.formBuilder.group({
      titulo: new FormControl('', Validators.required),
      descricao: new FormControl('', Validators.required),
      imageUrl: new FormControl('')
    });
  }

  onSubmit(){
    this.submitted = true;
    this.loading = true;
    if (this.form.invalid) { this.loading = false; return; }
    this.subscription.add(this.postService.save(this.publicacao).subscribe({
      next: post => {
        this.onClose();
        this.router.navigate([`/painel/publicacoes/${post.id}`]);
        Swal.fire('Publicação Cadastrada', 'Publicação salva com sucesso!', 'success');
      },
      error: error => Swal.fire('Oooops', `${error.error.message}`, 'error')
    }))
    this.loading = false;
  }


  onClose(){
    this.modalRef.hide();
  }

}
