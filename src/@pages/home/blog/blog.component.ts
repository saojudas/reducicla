import { Component, OnInit } from '@angular/core';
import { Subscription, BehaviorSubject, Observable } from 'rxjs';

// Interfaces
import { ResponsePageable } from 'src/@core/interfaces/response-pageable.interface';

// Services
import { PostService } from 'src/@core/services/post.service';

// Models
import { Post } from 'src/@core/models/post.model';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { ModalBlogDetailComponent } from 'src/@shared/modal/modal-blog-detail/modal-blog-detail.component';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  _publicacoes: BehaviorSubject<ResponsePageable<Post>> = new BehaviorSubject({} as ResponsePageable<Post>);
  publicacoes$: Observable<ResponsePageable<Post>> = this._publicacoes.asObservable();


  subscription: Subscription = new Subscription();

  // Modal
  modalRef: BsModalRef;

  // Utils
  semImagemUrl = '../../../assets/images/sem-imagem.jpg';

  constructor(private postService: PostService, private modalService: BsModalService) { }

  ngOnInit() {
    this.findAll();
  }

  findAll(){
    this.subscription.add(this.postService.findAll(0, 4).subscribe({
      next: publicacoes => {
        console.log(publicacoes);
        this._publicacoes.next(publicacoes)
      }
    }))
  }

  openPost(post: Post){
    this.modalRef = this.modalService.show(ModalBlogDetailComponent, {class: 'modal-dialog-centered', initialState: {post: post}});
  }

}
