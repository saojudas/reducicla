import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

// Services
import { PostService } from 'src/@core/services/post.service';

// Components
import { Post } from 'src/@core/models/post.model';

// Thirds
import { BsModalRef } from 'ngx-bootstrap/modal';
import Swal from 'sweetalert2';

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
