import { ResponsePageable } from './../../../@core/interfaces/response-pageable.interface';
import { Subscription, BehaviorSubject, Observable } from 'rxjs';
import { PostService } from './../../../@core/services/post.service';
import { Component, OnInit } from '@angular/core';
import { Post } from 'src/@core/models/post.model';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  _publicacoes: BehaviorSubject<ResponsePageable<Post>> = new BehaviorSubject({} as ResponsePageable<Post>);
  publicacoes$: Observable<ResponsePageable<Post>> = this._publicacoes.asObservable();


  subscription: Subscription = new Subscription();

  // Utils
  semImagemUrl = '../../../assets/images/sem-imagem.jpg';

  constructor(private postService: PostService) { }

  ngOnInit() {
    this.findAll();
  }

  findAll(){
    this.subscription.add(this.postService.findAll(0, 4).subscribe({
      next: publicacoes => {
        this._publicacoes.next(publicacoes)
      }
    }))
  }

}
