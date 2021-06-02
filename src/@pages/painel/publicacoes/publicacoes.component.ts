import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';


// Interfaces
import { ResponsePageable } from 'src/@core/interfaces/response-pageable.interface';

// Services
import { PostService } from 'src/@core/services/post.service';

// Components
import { Post } from 'src/@core/models/post.model';
import { ModalPublicacaoAddComponent } from 'src/@shared/modal/modal-publicacao-add/modal-publicacao-add.component';

// Thirds
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-publicacoes',
  templateUrl: './publicacoes.component.html',
  styleUrls: ['./publicacoes.component.css']
})
export class PublicacoesComponent implements OnInit {

  _publicacoes: BehaviorSubject<ResponsePageable<Post>> = new BehaviorSubject({} as ResponsePageable<Post>);
  publicacoes$: Observable<ResponsePageable<Post>> = this._publicacoes.asObservable();

  subscription: Subscription = new Subscription();

  // Pagination
  page = 0;
  size = 5;

  // Modal
  modalRef: BsModalRef;

  constructor(private postService: PostService, private modalService: BsModalService) { }

  ngOnInit() {
    this.findAll();
  }

  findAll(){
    this.subscription.add(this.postService.findAll(this.page, this.size).subscribe({
      next: publicacoes => this._publicacoes.next(publicacoes)
    }))
  }

  delete(id: number){
    Swal.fire({
      title: 'Excluir Publicação',
      text: `Você deseja realmente excluir esta publicação?`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sim',
      cancelButtonText: 'Não'
    }).then(result => {
      if(result.value){
        this.subscription.add(this.postService.delete(id).subscribe({
          next: () => {
            this.findAll();
            Swal.fire('Publicação Excluída!', `Publicação excluído com sucesso!`, 'success');
          },
          error: error => Swal.fire('Ooops!', `${error.error.mensagem}`, 'error')
        }))
      }
    })
  }

  openModalAddPublicacao(){
    this.modalRef = this.modalService.show(ModalPublicacaoAddComponent, {class: 'modal-dialog-centered'});
  }

  // Method to get current page number of pagination event
  handleCurrentPage(page: number){
    this.page = page;
    this.findAll();
  }

  // Method to get current size number of pagination event
  handleCurrentSize(size: number){
    this.size = size;
    this.findAll();
  }

}
